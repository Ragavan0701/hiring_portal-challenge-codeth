


import Navbar from './components/Navbar';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Jobcard from './components/JobCard/Jobcard';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { db } from './firebase.config';


function App1() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const tempJobs = [];
      const jobref = query(collection(db, 'Jobs'));
      const q = query(jobref, orderBy('postedOn', 'desc'));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
      setJobs(tempJobs);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchJobscustom = async (jobcri) => {
    try {
      const tempJobs = [];
      const jobref = query(collection(db, 'Jobs'));
      const q = query(
        jobref,
        where('type', '==', jobcri.type),
        where('title', '==', jobcri.title),
        where('location', '==', jobcri.location),
        where('experience', '==', jobcri.experience),
        orderBy('postedOn', 'desc')
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((job) => {
        tempJobs.push({
          ...job.data(),
          id: job.id,
          postedOn: job.data().postedOn.toDate(),
        });
      });
      setJobs(tempJobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        
        <Navbar />
        <Header />
        <Search fetchJobscustom={fetchJobscustom} />
        <div className="flex-grow">
          {jobs.map((job) => (
            <Jobcard key={job.id} {...job} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App1;
