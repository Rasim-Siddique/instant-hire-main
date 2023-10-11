import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componenets/Home/home';
import ProjectConScreen from './componenets/project-consultancy/project-consultancy';
import Footer from './componenets/Home/Footer/footer';
import PayrollOnScreen from './componenets/payroll-management/payroll';
import TechnicalRec from './componenets/technical-recruitment/technical';
import TaxConsultancy from './componenets/taxes/taxconsultancy';
import AboutUs from './componenets/about-us/aboutus';
import FindTalent from './componenets/findtalent/findtalent';
import ApplyToJob from './componenets/applytojob/applytojob';
import AllJobs from './componenets/jobs/AllJobs';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { useEffect } from 'react';


function App() {
  
  return (
    // <div className="App">

     <>
           <Provider store={store}>
     <div style={{minHeight : "300px"}}>
      <Routes>

        <Route path='/' Component={(props) => {
            return <Home black={false}   {...props}/>
          }}/>

          <Route path='/project-consultancy' Component={(props) => {
            return <ProjectConScreen black={true}  {...props}/>
          }}/> {/* { done} */}
           <Route path='/payroll-management' Component={(props) => {
            return <PayrollOnScreen black={true}  {...props}/>
          }}/> {/* { done} */}
          <Route path='/technical-recruitment' Component={(props) => {
            return <TechnicalRec black={true}  {...props}/>
          }}/> {/* { done} */}
           <Route path='/tax-consultancy' Component={(props) => {
            return <TaxConsultancy black={true}  {...props}/>
          }}/>  {/* { done} */}
          <Route path='/about-us' Component={AboutUs}/>  {/* { done} */}
          <Route path='/find-talent' Component={FindTalent}/>  {/* { done} */}
          <Route path='/apply-to-job' Component={ApplyToJob}/>
          <Route path='/all-jobs' Component={AllJobs}/>  {/* { almost done} */}
      </Routes>
   <Footer />
      
     
      
      </div>
      </Provider>
     </>
    // </div>
  );
}

export default App;
