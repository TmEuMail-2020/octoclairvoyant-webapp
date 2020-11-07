import { Stack } from '@chakra-ui/core'
import useWindowWidth from 'hooks/useWindowWidth'
import { Release, Repository, VersionRange } from 'models'
import * as React from 'react'

import ReleaseVersionFormControl from '~/components/ReleaseVersionFormControl'
import RepositorySearchCombobox from '~/components/RepositorySearchCombobox'
import { releasesComparator } from '~/utils'

const INLINE_BREAKPOINT = 768 // desktop

const renderOptionsFromReleases = (
  releases: Release[]
): React.ReactNode[] | null => {
  return releases.sort(releasesComparator).map((release) => (
    <option key={release.id} value={release.tag_name}>
      {release.tag_name}
    </option>
  ))
}

interface Props {
  releases?: Release[]
  versionRange: VersionRange
  isFetching?: boolean
  onRepositoryChange(repo: Repository | null | undefined): void
  onVersionRangeChange(range: VersionRange): void
}

const RepositoryReleasesPicker = ({
  releases,
  versionRange,
  isFetching = false,
  onRepositoryChange,
  onVersionRangeChange,
}: Props) => {
  const windowWidth = useWindowWidth()

  const handleRepositorySelect = React.useCallback(
    async (repo?: Repository | null) => {
      onRepositoryChange(repo)
    },
    [onRepositoryChange]
  )

  const handleFromVersionChange = (newFrom: string) => {
    const [, to] = versionRange
    onVersionRangeChange([newFrom, to])
  }

  const handleToVersionChange = (newTo: string) => {
    const [from] = versionRange
    onVersionRangeChange([from, newTo])
  }

  const releasesOptions = releases ? renderOptionsFromReleases(releases) : null

  const selectPlaceholder =
    Array.isArray(releasesOptions) && releasesOptions.length === 0
      ? 'Versions not found'
      : 'Choose a version'

  const [fromVersion, toVersion] = versionRange

  return (
    <Stack
      spacing={{ base: 2, md: 6 }}
      isInline={windowWidth >= INLINE_BREAKPOINT}
    >
      <RepositorySearchCombobox onSelect={handleRepositorySelect} />
      <ReleaseVersionFormControl
        label="From version"
        id="from-version"
        width={{ base: 'full', md: '30%' }}
        isDisabled={!releasesOptions || isFetching}
        placeholder={selectPlaceholder}
        onChange={handleFromVersionChange}
        value={fromVersion}
      >
        {releasesOptions}
      </ReleaseVersionFormControl>
      <ReleaseVersionFormControl
        label="To version"
        id="to-version"
        width={{ base: 'full', md: '30%' }}
        isDisabled={!releasesOptions || isFetching}
        placeholder={selectPlaceholder}
        onChange={handleToVersionChange}
        value={toVersion}
      >
        {releasesOptions}
      </ReleaseVersionFormControl>
    </Stack>
  )
}

export default RepositoryReleasesPicker
