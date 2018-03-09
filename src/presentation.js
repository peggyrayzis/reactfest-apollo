// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Quote,
  Cite,
  Image,
  CodePane,
  Deck,
  Slide,
  Text,
  Notes,
  Appear,
  Link,
  List,
  ListItem,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images, Code samples
import images from './images';
import code from './code';

// Require CSS
require('normalize.css');

export const textColor = {
  primary: '#3a3c4b',
  secondary: '#f7f7f8',
  tertiary: '#8b86e3',
  quartenary: '#f5a0a4',
};

const theme = createTheme(textColor, {
  primary: { name: 'Khula', googleFont: true, styles: ['300', '800'] },
  secondary: 'Helvetica',
});

export const textSize = {
  large: '5.5em',
  medium: '3.5em',
  small: '2em',
  extraSmall: '1.3em',
};

export const slideProps = {
  maxWidth: 1300,
  transition: ['fade'],
  bgColor: 'primary',
};

export const Title = ({
  children,
  textColor = 'secondary',
  textSize = '3.5em',
  lineHeight = 1,
  style,
}) => (
  <Text
    margin="0px"
    bold
    lineHeight={lineHeight}
    textColor={textColor}
    textSize={textSize}
    style={style}
  >
    {children}
  </Text>
);

export const Attribution = ({ children }) => (
  <Text margin="0px" lineHeight={1} textColor="tertiary" textSize="1em">
    {children}
  </Text>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress="none"
        contentWidth={1300}
      >
        <Slide {...slideProps} bgImage={images.boost} bgDarken={0.2}>
          <Text margin="0px" bold textColor="secondary" textSize="3.9em">
            Give your data<br />a boost! 🚀
          </Text>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              My name is Peggy Rayzis and I'm an open source engineer for Apollo
              where I build tools to help more people discover the magic that is
              GraphQL. If you ever have questions about integrating GraphQL into
              your React apps, feel free to reach out to me on Twitter anytime.
              <br />
              People always wonder what I actually do as an open source
              engineer. It changes every day! No two days are ever the same for
              me - sometimes I'm building a new feature for Apollo Client,
              reviewing pull requests, or evangelizing our tools on Twitter and
              Medium.
            </p>
          </Notes>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '50px',
            }}
          >
            <Image
              src={images.peggy}
              width="370px"
              height="370px"
              margin="0px"
              style={{ borderRadius: '50%' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Text
                margin="40px 0px 0px 0px"
                bold
                lineHeight={1}
                textColor="secondary"
                textSize="2.7em"
              >
                @peggyrayzis
              </Text>
              <Image
                margin="10px 0px 0px -35px"
                src={images.apollo}
                width="550px"
              />
            </div>
          </div>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              One thing I've learned over the course of my time at Apollo is
              that developing open source software is all about giving and
              receiving feedback. I'm constantly giving feedback throughout my
              day whether I'm reviewing a coworker's blog post or a
              contributor's PR. Our team also receives a lot of feedback on
              Twitter, in Github issues, and Slack from the developers that use
              our tools. Not all of that feedback is positive.
              <br />
              <br />
              I think sometimes we as maintainers pour so much energy into our
              projects that sometimes, negative feedback is hard to swallow. We
              get defensive and try to justify why the person is wrong. Maybe we
              think they're not qualified to give us the feedback or maybe we
              think that the criticism isn't grounded in facts.
              <br />
              <br />
              I don't think this wrong-spotting is very productive. Instead, we
              should try to look at negative feedback as an opportunity to grow.
            </p>
          </Notes>
          <Title>Developing open source software is all about feedback.</Title>
        </Slide>
        <Slide maxWidth={1300} bgColor="primary" {...slideProps}>
          <Notes>
            <p>
              In order to learn from negative feedback, we have to first
              understand it. What data did the feedback giver observe to arrive
              at that conclusion? By trying to see things from the other
              person's perspective, you'll start to see shreds of truth hidden
              within negative feedback.
            </p>
          </Notes>
          <Title textColor="tertiary">How can we learn</Title>
          <Title textColor="tertiary">from negative feedback?</Title>
        </Slide>
        <Slide maxWidth={1300} bgColor="primary" {...slideProps}>
          <Notes>
            <p>
              We recently ran into this situation at Apollo. A couple weeks ago,
              we noticed some alternative GraphQL clients popping up in the
              ecosystem, like urql by Formidable Labs. These new clients did a
              great job at delivering an easy setup experience for users, which
              sparked discussion that Apollo was too difficult to set up,
              especially for beginners, or that we had lost our focus on the
              developer experience.
            </p>
          </Notes>
          <Image src={images.urql} width="1000px" />
          <Link href="https://formidable.com/blog/2018/introducing-urql/">
            <Title textSize="1.2em">"Introducing URQL" by @ken_wheeler</Title>
          </Link>
        </Slide>
        <Slide {...slideProps} bgColor="primary">
          <Notes>
            <p>
              Hearing feedback that we needed to improve our developer
              experience was tough. We easily could have dismissed this feedback
              by wrong spotting. However, that's not going to help our users or
              help us learn from our mistakes. Instead, we decided to take this
              as an opportunity to really think about the getting started
              experience with Apollo and what we could do to make GraphQL more
              approachable.
              <br />
              <br />
              Training yourself how to view negative feedback is not an easy
              task, but there's a book I really enjoy that's helped me change my
              mindset about how I give and receive feedback. It's called Thanks
              for the Feedback and I highly recommend that you check it out,
              especially if you're an open source maintainer.
            </p>
          </Notes>
          <BlockQuote>
            <Quote
              textColor="secondary"
              textSize="2.2em"
              style={{
                borderLeft: `4px dotted ${textColor.quartenary}`,
                fontWeight: 'none',
                lineHeight: '1.2',
                letterSpacing: '1px',
              }}
            >
              In the end, wrong spotting not only defeats wrong feedback, it
              defeats learning.
            </Quote>
            <Cite bold textSize={textSize.extraSmall}>
              Douglas Stone, "Thanks for the Feedback"
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              One thing we were curious about was the timing of the feedback -
              our Apollo Client 2.0 API and setup process had been the same for
              over 6 months, so why were we just starting to see the feedback
              now? One thing we realized was that the rapid growth of Apollo
              over the past year was bringing a lot of newcomers into the
              project. If you look at the chart from Laurie Voss of npm, you can
              see that downloads of Apollo Client grew 350% last year, with a
              lot of that growth happening the second half of the year.
            </p>
          </Notes>
          <Link href="https://www.npmjs.com/npm/the-state-of-javascript-frameworks-2017-part-2-the-react-ecosystem">
            <Image src={images.ecosystem} height="700px" />
          </Link>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Adoption of a particular technology comes in phases. If you look
              at the speed of adoption plotted as a bell curve, you can see that
              early growth comes from innovators and early adopters. These
              people are usually ok with a little uncertainty, maybe they don't
              mind reading the source code or diving in deep when they need to
              solve a particular problem. The transition from early adopters to
              early majority is pretty significant however as that's when an
              idea starts to become mainstream. The early majority doesn't want
              to spend their time digging in source code, they want an easy
              experience that works out of the box.
              <br />
              <br />
              That's precisely the situation we were facing. As Apollo grows in
              popularity, the less tolerance newcomers have for complicated
              setup. We need to put ourselves in their shoes to figure out how
              to make setup easier.
            </p>
          </Notes>
          <Image src={images.curve} height="700px" />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Here's all of the packages you had to install before. Sara was
              joking with me at dinner last night that I should make a rap of
              all the packages. I'm going to spare you my rapping skills, but
              just look at this! You have to know about the Apollo cache and
              what a link is, it's a lot of mental energy to expend when you're
              just starting out. Now, it seems so obvious but when you work on
              an open-source project for a long time, it's easy to forget how it
              feels to be starting out for the first time.
            </p>
          </Notes>
          <Title textColor="tertiary">Before 😕</Title>
          <CodePane
            lang="javascript"
            textSize="2em"
            source={code.oldSetup}
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Our setup for Apollo Boost, our new zero-config Apollo Client, cut
              those packages in half. Not too shabby!
            </p>
          </Notes>
          <Title textColor="tertiary">After 😍</Title>
          <CodePane
            lang="javascript"
            textSize="2em"
            source={code.newSetup}
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Here's what setting up Apollo Client looked like before. Having a
              pluggable cache and link chain is great for more advanced users,
              but the vast majority of people getting started with Apollo Client
              were using the same InMemoryCache and HttpLink. We needed to find
              a solution that worked for both power users and beginners alike.
            </p>
          </Notes>
          <Title textColor="tertiary">Before 😕</Title>
          <div style={{ display: 'inline-block' }}>
            <CodePane
              lang="javascript"
              textSize="1.15em"
              source={code.setup}
              margin="0px"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              So, we came up with Apollo Boost! Apollo Boost sets up our
              recommended defaults like the InMemoryCache and HttpLink for you.
              All you have to do is pass your GraphQL endpoint in to create your
              client. In yesterday's GraphQL workshop, we used Apollo Boost and
              had everything up and running in less than 10 minutes, which was
              super awesome to see! It's also important to mention that nothing
              is going away about the old setup. Apollo Boost is a wrapper on
              top of Apollo Client that includes all our recommended settings.
            </p>
          </Notes>
          <Title textColor="tertiary">After 😍</Title>
          <div style={{ display: 'inline-block' }}>
            <CodePane
              lang="javascript"
              textSize="1.15em"
              source={code.boostSetup}
              margin="0px"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              We want Apollo Boost to transition beginners into creating their
              first production-ready apps, so we included some additional
              packages in Apollo Boost that reflect best practices. Including
              your GraphQL endpoint, there's a total of 6 configuration options,
              all optional, you can pass to Apollo Boost. Underneath the hood,
              these packages are Apollo Links for error link, client-side data,
              and HttpLink. The first config option is onError, which is a
              global error handling function that receives both graphql and
              network errors. The next one is clientState. clientState is an
              object with the same properties you would pass to
              apollo-link-state, which allows you to manage local data in Apollo
              Client alongside your remote data. We're going to learn more about
              that later. fetchOptions allow you to pass static fetch options to
              your http link. What about if we want to dynamically set fetch
              options like headers?
            </p>
          </Notes>
          <Title textColor="tertiary" textSize={textSize.small}>
            Under the hood of Apollo Boost
          </Title>
          <Image src={images.links} margin="50px 0px 0px 0px" width="1200px" />
          <List style={{ display: 'inline-block' }}>
            {[
              'onError: Global error handling function',
              'clientState: Local state management with Apollo',
              'fetchOptions: Pass to your HTTP request',
            ].map(item => (
              <ListItem key={item} bold textSize={textSize.extraSmall}>
                {item}
              </ListItem>
            ))}
          </List>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              That's where our new request function comes in! Before, you had to
              write your own Apollo Link and know about Observables in order to
              perform authentication. Now, you just pass a function to the
              request property that takes your graphql operation. From there,
              you can set headers dynamically on the context, which will be
              picked up by the http link. We're really excited about this
              feature because it abstracts all of the complexity of Apollo Link
              away without sacrificing any of the power. The request function
              can also return a promise in case you need to perform any async
              lookups.
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Simple auth with request
          </Title>
          <div style={{ display: 'inline-block' }}>
            <CodePane
              lang="javascript"
              textSize="1.12em"
              source={code.requestFn}
              margin="0px"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </Slide>
        <Slide {...slideProps} bgColor="primary">
          <Notes>
            <p>
              Apollo Boost has only been out for a month, but we've heard a
              great response from the community so far. Not only are beginners
              loving it, we're also getting great feedback from instructors who
              teach workshops. For his new course on Advanced React and Apollo,
              Wes Bos was able to cut 100 LOC from his Apollo Client setup code
              by switching to Boost. If you're creating content, this is huge!
              That's 100 lines he doesn't have to explain, which means you can
              get to querying faster.
            </p>
          </Notes>
          <BlockQuote>
            <Quote
              textColor="secondary"
              textSize="2.2em"
              style={{
                borderLeft: `4px dotted ${textColor.quartenary}`,
                fontWeight: 'none',
                lineHeight: '1.2',
                letterSpacing: '1px',
              }}
            >
              Apollo Boost cut my config down by 100 LOC - thanks!
            </Quote>
            <Cite bold textSize={textSize.extraSmall}>
              Wes Bos, @wesbos
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              Just because Apollo Boost is marketed as an easy way to get
              started doesn't mean it gives up any features. Apollo Boost brings
              you the same, consistent Apollo Client experience you know and
              love. That means declarative data fetching and being able to
              colocate your data requirements next to your UI. It also means
              zero-config caching, which we'll explain in detail soon. With
              apollo-link-state, you can combine local and server data in one
              query, which is something no other state management library has
              ever been able to offer. You also gain a painfree debugging
              experience with the Apollo Dev Tools and a soon to be released VS
              code extension.
            </p>
          </Notes>
          <Title textColor="tertiary" textSize={textSize.small}>
            The Apollo Client experience:
          </Title>
          <List style={{ display: 'inline-block' }}>
            {[
              'Declarative data fetching',
              'Intelligent zero-config caching',
              'Combine local & server data',
              'Excellent developer tools',
            ].map(item => (
              <Appear key={item}>
                <ListItem bold textSize={textSize.small}>
                  {item}
                </ListItem>
              </Appear>
            ))}
          </List>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              What exactly do I mean by declarative data fetching? Let's look at
              a sample query for a list of dogs. With GraphQL, we can specify
              only the properties our component needs.
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Declarative data fetching
          </Title>
          <CodePane
            lang="javascript"
            textSize="1.12em"
            source={code.dogQuery}
            margin="0px"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Then, we bind that GraphQL query to our UI by creating a query
              component. This is our new React Apollo 2.1 API, which is
              currently in beta but is about to be released very soon. It uses
              render props, which makes it really easy to compose multiple
              queries in one component. Apollo Client takes care of fetching
              your query and updating your component when data comes back. You
              also don't have to worry about manually tracking error and loading
              states - Apollo does that for you too! We talked about caching
              briefly before, how does Apollo Client cache our data?
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Declarative data fetching
          </Title>
          <CodePane
            lang="javascript"
            textSize="1.12em"
            source={code.dogs}
            margin="0px"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              The Apollo cache is awesome because it normalizes and stores your
              data for you. You don't have to mess around with normalizr or set
              any of this up yourself. This is a good thing because it turns out
              caching a graph is pretty hard. Luckily, we've already solved it
              with normalization.
            </p>
          </Notes>
          <Title textColor="secondary">
            The Apollo cache<br /> normalizes<br />your data for you.
          </Title>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Normalization is important because there are often multiple paths
              to access the same data with GraphQL. Here we have a sample UI for
              an article feed and an editor detail view. We have a query to get
              all of the articless for our feed. Let's say we want to make a
              change to our article's title with the updateArticle mutation on
              the detail page. Ideally, we want the data on the articles feed
              page to update with the new title as well. Keeping your data
              consistent and in sync is exactly why we normalize.
            </p>
          </Notes>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div>
              <Image src={images.cacheDiagram} height="690px" />
              <Link href="https://dribbble.com/shots/3782878-Article-Feed-for-iOS">
                <Attribution>UI from Ben Bate, dribbble</Attribution>
              </Link>
            </div>
            <Title textSize={textSize.small} style={{ width: '30%' }}>
              How do<br />we keep our data consistent?
            </Title>
          </div>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              So you understand what's going on under the hood, I'm going to try
              and demystify the Apollo cache's normalization process for you.
              First, we have our articles query. You'll also see we have our
              response payload, which comes back as the shape of the query, with
              the addition of one meta field. That meta field is called
              __typename and it's added automatically for you when the data
              comes back from the server. For each nested part of the query with
              a typename and id, we split them out into their own node in the
              cache in a flattened map. For the articles query, we can see that
              the cache value is a list of pointers. This is because the cache
              reconstructs each result from the flattened nodes in the cache.
            </p>
          </Notes>
          <Title textColor="tertiary" lineHeight={1.3}>
            Normalization:
          </Title>
          <Image
            margin="30px 0 30px 0"
            src={images.normalizationDiagram}
            width="1300px"
          />
          <Title textColor="tertiary" textSize={textSize.small}>
            Your cache key is __typename:id
          </Title>
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Don't worry if this sounds a little complicated, you can fully
              inspect your cache in Apollo DevTools to see what's going on. On
              the left, you can explore all of the nodes in the cache and see
              this flattened structure in action.
            </p>
          </Notes>
          <Title textColor="tertiary" textSize={textSize.small}>
            Inspect the cache with Apollo DevTools
          </Title>
          <Image src={images.normalization} height="600px" />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              One of the coolest features of Apollo Boost is that it includes
              one of our newest releases apollo-link-state, which allows you to
              manage your local data with Apollo Client and query it with
              GraphQL. link-state is truly pushing the boundaries of GraphQL
              outside the context of the server and it's super helpful if you're
              already using apollo for your remote data..
            </p>
          </Notes>
          <Title>
            Query local data with<br />apollo-link-state! 🎉
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              For you to understand just how exciting apollo-link-state is, we
              first must look at Apollo's past. Historically, users put all of
              their remote data into Apollo Client. This equated to about 80% of
              their data, but what about the other 20% for things like boolean
              flags, device API results. For that local data, users maintained a
              separate Redux store. Keeping this store in sync with changes in
              our remote data became tricky, especially as Apollo Client 2.0
              moved off of Redux last year.
            </p>
          </Notes>
          <Title textSize={textSize.small}>
            2017: Separate stores, no cohesion
          </Title>
          <Image src={images.acOld} height="600px" />
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              With state link, we now have the ability to query all of our
              application's local and remote data with GraphQL. This has several
              advantages - first, GraphQL becomes a unified interface for all of
              our data. It doesn't matter if that data is coming from a REST
              endpoint or your local cache, you query all of it the exact same
              way. Also, the Apollo cache becomes our single source of truth. No
              more managing a separate store - now you can manage your local
              data the same way you manage your remote data. You can even add
              client only properties to objects you get back from the server.
              Let's see an example of how we would do that:
            </p>
          </Notes>
          <Title textSize={textSize.small}>
            2018: One unified interface for all data
          </Title>
          <Image src={images.acNew} width="1300px" />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              In order to tell the Apollo Client network stack that we need to
              pull a field from the cache, we mark it with the @client
              directive. Here, you have a mixed query of both remote and local
              data.
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Mark local data with @client
          </Title>
          <CodePane
            lang="javascript"
            textSize="1.12em"
            source={code.clientQuery}
            margin="0px"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Now that we have our query, how do we resolve the data from the
              cache? That's where our resolvers come in. The API you use to
              create resolvers on the server with graphql-tools is the exact
              same API you use to create resolvers on the client with link
              state. You have your root value, any arguments, and also your
              context, which is where you pull the cache from in order to
              directly read and write to it. Another cool feature is that you
              can also return values from mutations, but you don't have to. This
              can be useful if you're creating a todo and want to get back the
              new todo's id for example.
            </p>
          </Notes>
          <CodePane
            lang="javascript"
            textSize="0.8em"
            source={code.resolvers}
            margin="-70px 0px 0px 0px"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Next, you'll want to add your resolvers to Apollo Boost by passing
              them to the clientState config property. This is where all your
              configuration for apollo-link-state goes with the exception of the
              cache since we already pass that in for you.
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Add resolvers to Apollo Boost
          </Title>
          <CodePane
            lang="javascript"
            textSize="1.12em"
            source={code.boostWithState}
            margin="0px"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Now that our resolvers are all hooked up, how do we fire a local
              mutation in our app? Here, we're using the @client directive again
              to indicate that this mutation should resolve locally.
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Use the @client directive
          </Title>
          <CodePane
            lang="javascript"
            textSize="1.1em"
            source={code.stateMutation}
            margin="0px"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} padding="0px">
          <Notes>
            <p>
              Once you have your GraphQL mutation, just include it in your
              mutation component as you normally would. The render prop for the
              mutation component exposes a mutate function as the first argument
              that you can use in your component to actually trigger the
              mutation.
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Update local data with a mutation
          </Title>
          <CodePane
            lang="javascript"
            textSize="1.1em"
            source={code.stateMutation2}
            margin="0px"
            style={{ maxWidth: 'none' }}
          />
        </Slide>
        <Slide {...slideProps} bgColor="primary">
          <Notes>
            <p>
              I encourage you to experiment with client side state management in
              Apollo Boost. You may find that it simplifies your current Redux
              code considerably, as it did for Scott. It's still pretty early
              but we're really excited about the idea of managing our local data
              with GraphQL and can't wait to see how it evolves. Now we're going
              to talk about what that might look like...
            </p>
          </Notes>
          <BlockQuote>
            <Quote
              textColor="secondary"
              textSize={textSize.small}
              style={{
                borderLeft: `4px dotted ${textColor.quartenary}`,
                fontWeight: 'none',
                lineHeight: '1.2',
                letterSpacing: '1px',
              }}
            >
              Switching from Redux to Apollo Link State simplified how I
              interact with my codebase significantly, by allowing me to
              integrate my local state with GraphQL & Apollo.
            </Quote>
            <Cite bold textSize={textSize.extraSmall}>
              Scott Tolinski, Level Up Tuts (@stolinski)
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              You probably noticed I didn't mention client-side schemas at all
              when talking about state-link. That's because they are a tricky
              problem to solve. Since the graphql modules for validating a
              schema are extremely large, we can't just include them the way we
              would on the server. Recently, we got a working prototype of the
              client-side schema working. While this schema does not perform
              type validation, it does allow you to write a schema in schema
              definition language and perform introspection against its AST.
            </p>
          </Notes>
          <Title textSize={textSize.small} textColor="tertiary">
            Client-side schemas
          </Title>
          <CodePane
            padding="0px"
            lang="javascript"
            textSize="1.2em"
            source={code.typeDefs}
          />
        </Slide>
        <Slide {...slideProps} bgImage={images.introspection}>
          <Notes>
            <p>
              If we can perform introspection against a client-side schema, then
              we can integrate our client-side schema into our tooling!! We have
              an early prototype of client-side schema introspection stitched
              alongside our remote schema. This is huge! Now you can inspect
              your remote APIs alongside your client data without ever having to
              leave the devtools. This also brings a whole host of other
              features, such as autocomplete when running queries in GraphiQL
              and the ability to perform tracing analysis on our data. Right
              now, this feature is in alpha but we're hoping to release it very
              soon.
              <br />
              <br />
              If we can stitch together a client-schema with our remote-schema,
              we can stitch together anything. Imagine being able to explore
              your Gatsby schema for static data alongside your dynamic client
              data. GraphQL becomes a unified interface for accessing all of the
              data that flows through your application.
            </p>
          </Notes>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              Now that we have the ability to stitch together the schemas for
              multiple data sources, we'll be able to integrate introspection
              into a variety of different tools. The most obvious case is dev
              tools, but we also have a VS Code plugin in the works that will
              feature autocomplete as youre typing out your queries in your
              editor. We can also integrate our client data into Apollo Engine
              to analyze performance and tracing data. With GraphQL as our
              unified interface to all of our data, our tooling suddenly becomes
              more cohesive and unified across the stack. This is not only great
              for developer productivity, but it is the key in my opinion to
              reducing configuration fatigue. With GraphQL, you can teach
              someone how to build a resolver once and they'll automatically be
              able to apply their knowledge across the stack for both local and
              remote data.
              <br />
              <br />
              This is all so fresh and new, but I think we're on the cusp of
              something really exciting here that's revolutionizing how we
              interact with data in our React apps. I can't wait to see what the
              future holds for Apollo & GraphQL.
            </p>
          </Notes>
          <Title>
            With GraphQL, we can unify developer tooling across the stack.
          </Title>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              We're almost at the end so I wanted to mention that all the code
              samples I showed you today are featured in our newest example app
              called pupstagram. It's like instagram but for favoriting pictures
              of dogs, which is honestly all I use instagram for anyways. It's
              up on CodeSandbox and I'll tweet the link after my talk.
            </p>
          </Notes>
          <Link href="https://codesandbox.io/s/r5qp83z0yq">
            <Image src={images.pupstagram} width="1000px" />
          </Link>
        </Slide>
        <Slide {...slideProps}>
          <Notes>
            <p>
              Before I go, I want to leave you with one final message.
              Practicing empathy while building open source software is so so so
              important to make sure we're meeting the needs of a diverse base
              of users. I know it's not easy either. The longer you work on an
              open source project, the tougher it is to put yourselves in the
              shoes of someone who’s discovering the project for the first time.
              As library authors at Apollo, we want to work harder at this. Our
              main goal is to make GraphQL more approachable for everyone. For
              us, building Apollo Boost was an awesome chance for us to focus on
              empathy, and we’re really happy with the creative solutions that
              came from it. I challenge all of you to take a step back and
              practice empathy building your software too.
            </p>
          </Notes>
          <Title>
            Empathy builds<br />better software.
          </Title>
        </Slide>
        <Slide {...slideProps} bgImage={images.boost} bgDarken={0.3}>
          <Text
            bold
            lineHeight={1}
            textColor="secondary"
            textSize={textSize.medium}
          >
            @peggyrayzis
          </Text>
        </Slide>
      </Deck>
    );
  }
}
