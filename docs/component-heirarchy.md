## Component Hierarchy

**AuthFormContainer**
 - AuthForm (modal)

**SplashContainer**
 - SplashVideo

**HomeContainer**
 - SearchBar
 - MountainIndex
  + MountainIndexItem

**MainNavContainer**
 - NavBar
 - SearchBar

**SearchResultsContainer**
 - SearchResults
  + MountainIndexItem
 - Sorting
 - Filters
 - Map

**MountainDetailContainer**
 - MountainDetail
  + MountainAdditionalDetails
 - ReviewIndex
  + ReviewIndexItem
 - ReviewForm (modal)
 - PhotoForm (modal)

**ReviewIndexContainer**
 - ReviewIndexItem
 - ReviewForm

## Routes

| Path                     | Component                 |
|--------------------------|---------------------------|
| "/"                      | "AuthFormContainer"       |
| "/home"                  | "HomeContainer"           |
| "/mountains"             | "SearchResultsContainer"  |
| "/mountains/:mountainId" | "MountainDetailContainer" |
| "/reviews/:reviewId"     | "ReviewIndexContainer"    |
