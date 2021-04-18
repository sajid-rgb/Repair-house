import React from 'react';
import worker1 from '../../../images/worker1.jpg'
import worker2 from '../../../images/worker2.jpg';
import worker3 from '../../../images/worker3.jpg';
import WorkerSlide from './WorkerSlide/WorkerSlide';
import sofi from '../../../images/sofi.jpg'
const workers = [
    {
        name: 'Willian Smith',
        img: worker1,
        from: 'India',
        experience: '3 years experience on tech site',
    },
    {
        name: 'Ahmed Khan',
        img: worker2,
        from: 'India',
        experience: '13 years  experience on laptop servicing',
    },
    {
        name: 'Abdul Zabbar',
        img: worker3,
        from: 'Australia',
        experience: '6 years experience on tech site',
    },
    {
        name: 'Sofi Khan',
        img: sofi,
        from: 'Pakistan',
        experience: '8 years experience camera repairing',
    }
]
const Worker = () => {
    return (
        <div className='mb-5 mt-5'>

              <div className='text-center'>
              <h1>OUR <span style={{color:'orangered'}}> WORKERS</span></h1>
            <h6> They are master class and they services us 5 years+</h6>
              </div>

                <div className="container row mx-auto mt-5">
                    
                        {
                            workers.map(worker => <WorkerSlide worker={worker}></WorkerSlide>)
                        }
                </div>
        </div>
    );
};

export default Worker;