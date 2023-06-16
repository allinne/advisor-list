import { useEffect, useState } from 'react';
// import AdvisorPreview from './AdvisorPreview';
// import { fetchAdvisors } from '../api-client';

function AdvisorList({ initialAdvisors }) {
  const [ advisors ] = useState(initialAdvisors);

  useEffect(() => {
  //   async function fetchData() {
  //     const data = await fetchAdvisors();
  //     console.log(data)

  //     setAdvisors(data);
  //   }
  //   fetchData();
  }, []);

  return (
    <>
      <div>AdvisorList</div>
      {advisors.map((el) => {
        return <div key={el.id}>{el.id}</div>
      })}
    </>
  )
}

export default AdvisorList;
