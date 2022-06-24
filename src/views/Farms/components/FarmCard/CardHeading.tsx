import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading } from '@fastswap-uikit'
import { CommunityTag, CoreTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
}) => {
  const coin1 = farmImage.split('-')[0]
  const coin2 = farmImage.split('-')[1].split('.')[0]
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <img src={`/images/tokens/${coin2}.png`} alt={coin2} width={28} height={28} style={{border: '1px solid #d4d4d4', borderRadius: '50%'}} />
      <img src={`/images/tokens/${coin1}.png`} alt={coin1} width={36} height={36} style={{position: 'absolute', top: 46, left: 40, border: '1px solid #d4d4d4', borderRadius: '50%'}} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel}</Heading>
        <Flex justifyContent="center">
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
