import { TypeHeadingSizes } from '../../../components/common/typography/TypeHeading';
import { TypeParagraphSizes } from '../../../components/common/typography/TypeParagraph';
import { Breakpoint } from '../Breakpoint';
import mixins from '../mixins';

export default {
  font: {
    heading: 'SignifyRaisonne',
    body: 'SignifyRelative',
  },
  mixins: {
    ...mixins,
  },
  color: {
    // Core colors
    white: '#fff',
    darkGray: '#3c3c41',
    green: '#00e487',
    blue: '#1432ff',
    yellow: '#FFC714',
    orange: '#F07900',
    gradient: (angle = 35) => `linear-gradient(${angle}deg, #00e487, #1ecbd0)`,
  },
  spacing: {},
  headings: {
    [Breakpoint.XS]: {
      [TypeHeadingSizes.H1]: 150,
      [TypeHeadingSizes.H2]: 150,
      [TypeHeadingSizes.H3]: 150,
      [TypeHeadingSizes.H4]: 150,
      [TypeHeadingSizes.H5]: 150,
      [TypeHeadingSizes.H6]: 150,
    },
  },
  paragraph: {
    [Breakpoint.XS]: {
      [TypeParagraphSizes.XS]: 150,
      [TypeParagraphSizes.S]: 150,
      [TypeParagraphSizes.M]: 150,
      [TypeParagraphSizes.L]: 150,
      [TypeParagraphSizes.XL]: 150,
    },
  },
} as const;
