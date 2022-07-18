# Project Visualize Covid Data

**Personal  Journal**

**Nicholas O'Brien**

```
github "nicholasob7"
```

**Project App Name**

```
"te-waka-app"
```

**Resources**

```
React, Javascript, HTML, disease.sh, charts.js

```

# Week One Directions

Week one was a discovery week. The team used miro to construct a whiteboard to create a general idea of what kind of visualizations to include in our te-waka-app.

We settled on a number of visualizations involving;

1. A time series data chart of global cases, deaths and recoveries.
2. A time series data chart of global vaccinations.
3. A doughnut chart breakdown of current cases by continent.
4. A polar chart breakdown of deaths by continent.
5. A barchart breakdown of tests per million population and total populations by continent.
6. A piechart breakdown comparing New Zealand and Australia.

We then sought to identify an application with Api prepared for updated and historical time series data. We looked at a number of sites and settled on one called,

```
disease.sh
```

This site "disease.sh" appeared the easiest site to use. This was because the backend work of scripting callable API was already available on the docs section of "disease.sh."

Accordingly Nick Do confirmed that we could now focus on achieving the desired Covid 19 data visualizations in order from easy to hardest.

We imagined that the world map of covid data would be among the hardest visualizations, and began work on our medium to easy variants. I focused on scripting the required API calls while Nick C moved to produce some easier visualizations and Sameera moved to scripting our AWS cloud deployment solutions.

# Week One Challenges

A challenge of initial project discovery involved the teams inexperience with what kind of visualizations were 'easy', 'medium' or 'hard' to achieve.

We also experienced some consternation deciding on a suitable site with callable api to provide real time data for our visualizations.

Our instructor Nick Do was instrumental in guiding us through these two processes.

Week One was consumed by discovery of these two processes and quite tentative steps by all team members in relation to the tasks provided.

**Personal Challenges**

Personally I found it challenging to understand what sort of visualizations were desirable and achievable in the time provided. Particularly given the relative experience of team members and the variegation of solutions available on the web.

Especially regarding the number of demonstration tutorials using different API providers and script approaches to the question of visualising Covid 19 data from a variety of data sources and format of data sources. I found it difficult to make sense of tutorial examples substituting hard coded dummy data rather than real world API data sources.

# Week Two Directions

**Work on API fetch calls to API & Visualizations.**

Week Two was very much focused on team discovery of their assigned tasks. This week was characterized by many hours of watching youtube tutorials, reviewing github code bases and in general being challenged by documentation formats and confusion of how code snippets should relate to each other.

I made hard coded progress on writing scripts for api calls to "disease.sh". However on the question of refactoring the api calls into a single .js file I eventually required assistance from our instructor Nick Do.
Thereafter Nick C and I pored over visualization solutions while Sameera made progress with scripts for AWS cloud deployment.

# Week Two Personal Challenges

My biggest challenge was realizing a single file of extremely efficient API queries to be called in components designed in seperate visualization files.

During this period I code followed a number of tutorials successfuly and unsuccessfully. The biggest boost to my confidence being a tutorial displaying movie posters from an API with access key on the "JS Mastery" youtube channel.

Following these tutorials gave me insight into folder structure, es7 extensions and the convenience of GitHub co-pilot code suggestions.

Altogether this was a rewarding though time intensive process for me.

It was extremely valuable to me to understand that constructing the API calls in javascript would be delivered in just an elegant and efficient way as API calls were made in my python main.py file from the previous assignment work.

I gained a greater respect for javascript and a more open mind towards javascript in general.

# Week Three Directions

**Visualizations, Github, Deprecation Warnings and React-scripts**

Week Three was for the team a lesson in; the fragility of javascript dependencies; the desirability of fluency in Github terminal scripts and the specificity of javascript for use in constructing visualizations of data called from API.

In attempting to construct visualization scripts and testing them via the react local live server it became evident that experience was just as important as following warnings and prompts concerning the vulnerabilities of react packages and dependencies.

While Sameera managed to complete her deployment aws cli scripts, Nick C and I struggled to independently construct a compiling visualization with an effective display of a visualization.

Eventually Nick Do decided to code follow an example of a compiling display script and a displaying plot chart of live data from an API call to disease.sh.

Nick Do demonstrated the complexity of calling and plotting live data from an API. This complexity was present in transforming data which could be plotted especially in relation to time series data. This was in spite of the called data being global and not continent or country specific.

Nick Do pointed out that despite his 5 years of experience he found it quite a challenge to quickly script the required functions and components. Nick Do completed this work in two sessions of around an hour each.

This was very enlightening for the team and boosted team morale significantly. Of great importance to the team was Nick Do's knowledge of search terms and resources in the completion of this task.

# Week Three Personal Challenges

**Deprecations, Dependencies/ Packages and Github**

Nick Do had produced a compiling visualization of hard coded non API data from a series of resources on the Friday of Week Two.

I attempted an advance on his example and ran into a rabbithole of deprecation warnings from the react compiler.  Evetually I had uninstalled react-scripts and could not resolve a compiling script which actually displayed our code progress.

Not having gained fluency in practical application of my own Github Branch this led to several instances of me issuing invitations to team members of a new repository on GitHub that would compile for team work over the weekend period between week two and week three.

This situations was resolved by Nick Do through the early part of week three.

Nick C also forwarded a Github tutorial from "Tech with Tim" on Youtube which was very helpful in my ability to generate my own branch and working on it without thinking to abandon our original repository.

# Week Four Directions

**Successful Visualizations, AWS Scripts and deliberations on HTML and Dashboard Format**

Week Four saw the team with compiling and displaying plotted charts from live API calls. Our script solutions for AWS deployment are intact and team members are busy organising personal journals, dashboard styling of our visualizations and deliberation on our ability to generate a globe map chart of Covid 19 data.,
