import React from 'react';
import { RepositoryInfo } from 'models';
import { Parent } from 'unist';
import unified from 'unified';
import parse from 'remark-parse';
import github from 'remark-github';
import remark2rehype from 'remark-rehype';
import highlight from 'rehype-highlight';
import rehype2react from 'rehype-react';
import markdown from 'remark-stringify';

interface HookArgs {
  repository: RepositoryInfo;
  description: Parent;
  componentsMapping: object;
}

interface HookReturnedValue {
  processedDescription: React.ReactNode;
  isProcessing: boolean;
}

async function processDescription(
  description: Parent,
  repositoryUrl: string,
  components: object
): Promise<React.ReactNode> {
  return new Promise((resolve, reject) => {
    const processor = unified()
      .use(parse)
      .use(github, { repository: repositoryUrl })
      .use(remark2rehype)
      .use(highlight, { ignoreMissing: true })
      .use(rehype2react, {
        createElement: React.createElement,
        components,
      });

    processor.process(
      unified().use(markdown).stringify(description),
      (err, file: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(file.result);
        }
      }
    );
  });
}

function useProcessDescriptionMdast({
  repository,
  description,
  componentsMapping,
}: HookArgs): HookReturnedValue {
  const [
    processedDescription,
    setProcessedDescription,
  ] = React.useState<React.ReactNode | null>(null);

  const [isProcessing, setIsProcessing] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsProcessing(true);
    const handleProcessDescription = async () => {
      const result = await processDescription(
        description,
        repository.url,
        componentsMapping
      );

      setIsProcessing(false);
      setProcessedDescription(result);
    };
    handleProcessDescription();
  }, [componentsMapping, description, repository.url]);

  const result = React.useMemo(
    () => ({
      processedDescription,
      isProcessing,
    }),
    [isProcessing, processedDescription]
  );

  return result;
}

export default useProcessDescriptionMdast;