var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }

];
    var extraStats =[
    {
        'city': 'Pacoima', 
        'zip': '91331', 
        'state': 'CA', 
        'income': '60360',
        'age': '33'
    },
    {
        'city': 'Ketchikan', 
        'zip': '99950', 
        'state': 'AK', 
        'income': '00000',
        'age': '00'
    }
];


const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// -------- Task 1: create database statsdb --------
/* async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('statsdb'); 
    console.log('✅ Database "statsdb" is ready!');
  } catch (err) {
    console.error('❌ Task 1 error:', err);
  } finally {
    await client.close();
  }
} */
// -------- Task 2: create collection uscensus --------
/* async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('statsdb');

    await db.createCollection('uscensus');
    console.log('✅ Collection "uscensus" created!');
  } catch (err) {
    console.error('❌ Task 2 error:', err.message);
  } finally {
    await client.close();
  }
} */

  // -------- Task 3: insert stats into uscensus --------
/*     async function run() {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const result = await collection.insertMany(stats);
        console.log(`✅ Inserted ${result.insertedCount} records into "uscensus"`);
    } catch (err) {
        console.error('❌ Task 3 error:', err);
    } finally {
        await client.close();
    }
    } */

/*     // -------- Task 4: insert extra two records --------
    async function run() {
    try {
        await client.connect();
        console.log('✅ Connected to MongoDB');

        const db = client.db('statsdb');
        const collection = db.collection('uscensus');

        const result = await collection.insertMany(extraStats);
        console.log(`✅ Inserted ${result.insertedCount} extra records into "uscensus"`);
    } catch (err) {
        console.error('❌ Task 4 error:', err);
    } finally {
        await client.close();
    }
    } */

    // -------- Task 5: find out the zip code for corona, NY --------
/*     async function run() {
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('statsdb');
    const collection = db.collection('uscensus');

    const result = await collection.findOne({ city: 'Corona', state: 'NY' });
    if (result) {
      console.log(`📍 ZIP code for ${result.city}, ${result.state} is ${result.zip}`);
    } else {
      console.log('❌ No matching record found.');
    }
  } catch (err) {
    console.error('❌ Task 5 error:', err);
  } finally {
    await client.close();
  }
} */

/*   // -------- Task 6: find all cities in CA --------
  async function run() {
    try {
      await client.connect();
      console.log('✅ Connected to MongoDB');

      const db = client.db('statsdb');
      const collection = db.collection('uscensus');

      const cursor = collection.find({ state: 'CA' });
      const results = await cursor.toArray();

      console.log('💰 Income for cities in California:');
      results.forEach(r => {
      console.log(`${r.city}: $${r.income}`);
        });
    } catch (err) {
        console.error('❌ Task 6 error:', err);
    } finally {
        await client.close();
    }
    } */

    // -------- Task 7: Update income & age for Alaska --------
    /* async function run() {
    try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('statsdb');
    const collection = db.collection('uscensus');

    const myquery = { state: 'AK' };
    const newvalues = { $set: { income: '38910', age: '46' } };
    const result = await collection.updateOne(myquery, newvalues);

    console.log(`✅ Updated ${result.modifiedCount} record(s) for Alaska (AK).`);
  } catch (err) {
    console.error('❌ Task 7 error:', err);
  } finally {
    await client.close();
  }
} */

    // -------- Task 8: Sort records in ascending order by state --------
    async function run() {
    try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db('statsdb');
    const collection = db.collection('uscensus');

    const results = await collection.find().sort({ state: 1 }).toArray();

    console.log('📋 Records sorted by state (ascending):');
    results.forEach(r => {
      console.log(`${r.state} - ${r.city} - Income: ${r.income} - Age: ${r.age}`);
    });
  } catch (err) {
    console.error('❌ Task 8 error:', err);
  } finally {
    await client.close();
  }
}

run();
