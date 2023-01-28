# UFOs

### Submission Sumary:
index.html: file in parent github file
app.js: static --> js --> app.js
data.js: static --> js --> data.js

## Project Overview
We were recruited to help our friend Dana build a webpage - particularly to help by building a filter-able table using JavaScript - to host an article, and the corresponding data, on UFO sightings. The table contains dates, locations (city, state, and country), shape of the observed objected, duration of the sighting, and additional comments relating to the observation. The table can be filtered by Date, City, State, Country, and Shape.

## Results
The website is a great start for allowing someone interested in the topic to search through the data on the own.

### Filterable Tables
The table can be filtered by Date, City, State, Country, Shape, or combination of those options.

#### Unfiltered Table
![]()

#### Table with One Filter Applied
The following screen shot shows the table with a single filtered applied. The "Date" filter has been set to "1/12/2010".
![]()

#### Table with Multiple Filters Applied
The following screen shot shows the table with two filters applied. In addition to the above date filter, the "State" filter has been set to "or" for Oregon. Although the process is shown using only two filters, it is possible to filter on all 5 categories simultaneously.
![]()


The ability of the website to allow for the research to apply ultiple filters simultaneously is a really handy feature, since it will allow them to slowly drill into the data by adding or removing filters until they are able to see the data they are interested.

### The Code Behind the Filters
The following line of code listens for a change in the input boxes on the website:
![]()

Once a change is detected, the updateFilters function is called, which uses the input changes on the website to update the "filters" object.
![]()

The last line in the updateFilters function calls the filterTable funciton, which loops through the "filters" object, applying the filters to the data, and updating the table on the website by calling the buildTable function on the filtered data.
![]()


## Summary
Overall, the filters work very well for the data we are working with. However, there are some areas for improvement.

The biggest drawback is the need to be very specific with how the search criteria is entered. For example, searching "OR", or "Oregon", instead of "or" won't yield any results. 

There are a couple areas in which I would recommend further development:
- The data needs to be cleaned. The Date, City, State, Country, and Shape columns seem to be in good order, but the Duration column includes different units and formats. Getting this into a uniform format would also enable filtering on this data. Additionally, although it isn't data that you would want to filter on, the Comments column could also use cleaning. Currently, there are a number of instances of the ASCII characters.
- There are a couple of options to make the search more user friendly:
    - They could be setup so that they predictively provide search suggestions based on what you have entered, and the values present in the table. For example, if in the City search, the user typed "fre", the search would suggest "fresno" and any other options that match what has been typed so for. This would be particularly useful for the Canadian observations, where the city is listed as "city (canada)".
    - It might be possible to create a basic and advanced search option where the basic search was just a single input box that could search on any of the columns. It could be setup using regex so that the input was categorized into one of the existing input options, and the corresponding column as sorted accordingly. It could also be setup so that the value was searched for across all the columns and any matches, regardless of column, would be returned. The advanced search would be setup similarly to how the current search is arranged, which allows users to search using multiple filters simultaneously. 