export default [/* GraphQL */`

enum FilterType {
  """
  Switch / Boolean
  """
  SWITCH

  """
  Single-choice
  """
  SINGLE_CHOICE

  """
  Multi-choice
  """
  MULTI_CHOICE
}

type FilterTexts {
  _id: ID!
  locale: String
  title: String
  subtitle: String
}

type FilterOption {
  _id: ID!
  texts(forceLocale: String): FilterTexts
  value: String
}

type Filter {
  _id: ID!
  updated: Date
  created: Date
  isActive: Boolean
  texts(forceLocale: String): FilterTexts
  type: FilterType
  key: String
  options: [FilterOption!]
}

type FilteredFilterOption {
  option: FilterOption!
  remaining: Int
  active: Boolean
}

type FilteredFilter {
  filter: Filter!
  remaining: Int!
  active: Boolean
  filteredOptions: [FilteredFilterOption!]
}
`];
