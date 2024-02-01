<!--
npm init then following
 -->

<!--
for starting a project for e-commerce api's
npm install express cookie-parser body-parser compression pino pino-pretty dayjs mongoose cors dotenv jsonwebtoken bcryptjs nanoid http-status-codes morgan validator
 -->

<!-- for devDependencies
npm install -D @types/nanoid @types/express @types/bcryptjs @types/compression @types/body-parser @types/cookie-parser @types/jsonwebtoken @types/cors @types/mongoose @types/morgan @types/validator @types/node ts-node-dev typescript

 -->

<!--
create tsconfig.json
 -->

<!--
for using mongo-seeding
import * as seed from 'mongo-seed';

const config = { ... };

const seeder = new seed.Seeding({
  database: config.database,
  dropDatabase: true,
  tsNode: true,
});
... further setup and data import
 -->

<!--
for data imports for mongo-seeding
In TypeScript files (ts extension), use export = objectOrArray.
 -->

<!--

Here's how you can dynamically render the itinerary data for 39 cities with time-aware content in Next.js 14, using the DayContent component approach:

Fetch Data:

Use a data fetching method like getStaticProps or getServerSideProps to retrieve your city data, ensuring it's available before rendering.
Create a City Component:

Create a City component to encapsulate each city's information:
JavaScript
const City = ({ cityData }: { cityData: CityDataTypes }) => {
  return (
    <div key={cityData.name}>
      <h2>{cityData.name}</h2>
      {cityData.description.map((dayInfo) => (
        <DayContent key={dayInfo.dayHeading} dayContent={dayInfo.dayContent} />
      ))}
    </div>
  );
};
Use code with caution. Learn more
Render Cities in Main Component:

In your main component (e.g., Itinerary), iterate through the fetched city data and render each City component:
JavaScript
const Itinerary = ({ citiesData }: { citiesData: CityDataTypes[] }) => {
  return (
    <div>
      {citiesData.map((cityData) => (
        <City key={cityData.name} cityData={cityData} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  Fetch your city data here
  const citiesData = await fetchCitiesData();
  return { props: { citiesData } };
}

export default Itinerary;
Use code with caution. Learn more
Key Points:

Ensure your CityDataTypes interface accommodates the description array with DayInfo objects.
Adapt the DayContent component to handle potential variations in text formatting and keyword usage.

 -->
