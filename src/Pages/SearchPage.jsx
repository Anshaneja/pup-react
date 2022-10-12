import React, {useRef, useState, Component, Fragment} from "react";
import {BiSearchAlt , BiCaretUp } from "react-icons/bi";
import profileImg from "../images/profile.jpeg";
// Filter imports
import Select from 'react-select';



import { Dialog, Transition } from '@headlessui/react'
import ProfileCard from "../components/ProfileCard"

const SearchPage = () => {
    
    
    const alumniData = [
        {
         "Name": "Ansh Aneja",
         "Session": 2023,
         "RegNo": 101,
         "Department": "Engineering & Technology",
         "Degree": "B.Tech",
         "Country": "USA",
         "State": "Punjab",
         "City": "Patiala",
         "Company": "Amazon",
         "Position": "Jr. Software Engineer"
        },
        {
         "Name": "Vishal Aneja",
         "Session": 2023,
         "RegNo": 102,
         "Department": "Engineering & Technology",
         "Degree": "B.Tech",
         "Country": "INDIA",
         "State": "Bihar",
         "City": "Patna",
         "Company": "Google",
         "Position": "Jr. Software Engineer"
        },
        {
         "Name": "Jaspal Singh",
         "Session": 2016,
         "RegNo": 103,
         "Department": "Engineering & Technology",
         "Degree": "B.Tech",
         "Country": "CANADA",
         "State": "Himachal Pradesh",
         "City": "Shimla",
         "Company": "Intuit",
         "Position": "Sr. Software Engineer"
        },
        {
         "Name": "Manisha Bansal",
         "Session": 2023,
         "RegNo": 104,
         "Department": "Arts",
         "Degree": "B.A Honors",
         "Country": "INDIA",
         "State": "Maharastra",
         "City": "Mumbai",
         "Company": "Delloitte",
         "Position": "Accountant"
        },
        {
         "Name": "Gurmeet Singh",
         "Session": 2016,
         "RegNo": 105,
         "Department": "Business Management & Commerce",
         "Degree": "B.Com ",
         "Country": "INDIA",
         "State": "Tamil Nadu",
         "City": "Chennai",
         "Company": "Delloitte",
         "Position": "Accountant"
        },
        {
         "Name": "Amandeep Kaur",
         "Session": 2012,
         "RegNo": 106,
         "Department": "Business Management & Commerce",
         "Degree": "BBA",
         "Country": "INDIA",
         "State": "Himachal Pradesh",
         "City": "Kufri",
         "Company": "Microsoft",
         "Position": "Marketing Assistant"
        },
        {
         "Name": "Kuldeep Singh Dhillon",
         "Session": 2012,
         "RegNo": 107,
         "Department": "Business Management & Commerce",
         "Degree": "MBA",
         "Country": "INDIA",
         "State": "Maharastra",
         "City": "Pune",
         "Company": "Amazon",
         "Position": "Hiring Manager"
        },
        {
         "Name": "Harpreet  Kaur",
         "Session": 2016,
         "RegNo": 108,
         "Department": "Law",
         "Degree": "B.A LLB",
         "Country": "INDIA",
         "State": "Tamil Nadu",
         "City": "Pondicherry",
         "Company": "Amazon",
         "Position": "Jr. Advocate"
        },
        {
         "Name": "Nitin Kumar",
         "Session": 2020,
         "RegNo": 109,
         "Department": "Law",
         "Degree": "B.A LLB",
         "Country": "INDIA",
         "State": "Punjab",
         "City": "Ludhiana",
         "Company": "Amazon",
         "Position": "Sr. Advocate"
        }
    ];

    const [ searchResults , setSearchResults] = useState(alumniData);
    const [searchQuery , setSearchQuery ] = useState('');
    
    const [session , setSession] = useState();
    const [ regNo, setRegNo] = useState('');
    const [ department, setDepartment] = useState();
    const [ degree, setDegree] = useState();
    const [ state, setState] = useState();
    const [ city, setCity] = useState();
    const [country , setCountry] = useState();
    const [position , setPosition] = useState();
    const [company , setCompany] = useState();
    
    // Filter Lists

    // const companyList = [...new Set(alumniData.map(alumni => alumni.Company))].map( item => new Object({value : item, label : item }));
    // const positionList = [...new Set(alumniData.map(alumni => alumni.Position))].map( item => new Object({value : item, label : item }));
    // const countryList = [...new Set(alumniData.map(alumni => alumni.Country))].map( item => new Object({value : item, label : item }));
    // const sessionList = [{value : 2023, label : 2023},{value : 2020, label : 2020},{value : 2021, label : 2021},{value : 2018, label : 2018}]

    const sessionList = [...new Set(alumniData.map(alumni => alumni.Session))].map( item => new Object({value : item, label : item }));
    const RegNoList = [...new Set(alumniData.map(alumni => alumni.RegNo))].map( item => new Object({value : item, label : item }));
    const departmentList = [...new Set(alumniData.map(alumni => alumni.Department))].map( item => new Object({value : item, label : item }));
    const degreeList = [...new Set(alumniData.map(alumni => alumni.Degree))].map( item => new Object({value : item, label : item }));
    const countryList = [...new Set(alumniData.map(alumni => alumni.Country))].map( item => new Object({value : item, label : item }));
    const stateList = [...new Set(alumniData.map(alumni => alumni.State))].map( item => new Object({value : item, label : item }));
    const cityList = [...new Set(alumniData.map(alumni => alumni.City))].map( item => new Object({value : item, label : item }));
    const companyList = [...new Set(alumniData.map(alumni => alumni.Company))].map( item => new Object({value : item, label : item }));
    const positionList = [...new Set(alumniData.map(alumni => alumni.Position))].map( item => new Object({value : item, label : item }));



    function searchResultsHandler(e){
        setSearchResults(alumniData.filter( (alumni)=> 
            alumni.Name.toLowerCase().includes(searchQuery.toLowerCase())
            && ( regNo != ''? alumni.RegNo ==  regNo : true) 
            && ( country? alumni.Country===country.value : true )
            && ( session? alumni.Session ===  session.value : true)
            && ( department? alumni.Department ===  department.value : true)
            && ( degree? alumni.Degree ===  degree.value : true)
            && ( state? alumni.State ===  state.value : true)
            && ( city? alumni.City ===  city.value : true)
            && ( company? alumni.Company ===  company.value : true)
            && ( position? alumni.Position ===  position.value : true)
            ));
        
    }

    const sessionSelector = useRef(null);
    const departmentSelector = useRef(null);
    const countrySelector = useRef(null);
    const degreeSelector = useRef(null);
    const stateSelector = useRef(null);
    const citySelector = useRef(null);
    const companySelector = useRef(null);
    const positionSelector = useRef(null);
    function clearFilters(){
        setRegNo('');
        setSession(null);
        setDepartment(null);
        setDegree(null);
        setCountry(null);
        setState(null);
        setCity(null);
        setCompany(null);
        setPosition(null);
        countrySelector.current.clearValue();
        sessionSelector.current.clearValue();
        departmentSelector.current.clearValue();
        degreeSelector.current.clearValue();
        stateSelector.current.clearValue();
        citySelector.current.clearValue();
        companySelector.current.clearValue();
        positionSelector.current.clearValue();
        setSearchResults(alumniData.filter((alumni)=>alumni.Name.toLowerCase().includes(searchQuery.toLowerCase()))  );
    }

    function queryOnChangeHandler(e){
        setSearchQuery(e.target.value);
        console.log(e.target.value)
    }
    function enterKeyDownHandler(e){
        if(e.key === 'Enter'){
            searchResultsHandler();
        }
    }

    const locationList = useRef(null);
    const sessionDropdown = useRef(null);
    // const positionListContainer = useRef(null);
    const locationDropdownArrow = useRef(null);
    const sessionDropdownArrow = useRef(null);

    const employmentDropdownArrow = useRef(null);
    const employmentList = useRef(null);

    const educationDropdownArrow = useRef(null);
    const educationList = useRef(null);
    
    const regNoDropdownArrow = useRef(null);
    const regNoList = useRef(null);

    
    function filterDropdownHandler(dropdownArrow , list){
        list.current.classList.toggle("hideDrop");
        list.current.classList.toggle("pt-2");
        list.current.classList.toggle("hidden");
        dropdownArrow.current.classList.toggle("rotate-180");
    }

    // Search Filter Variables and functions
    function countryChangeHandler(e){
        // filters.country = e.target.value;
        setCountry(e.target.value);
        // filterChange();
    }
    
    function positionChangeHandler(e){
        // filters.position = e.target.value;
        setPosition(e.target.value);
        // filterChange();
    }

    function companyChangeHandler(e){
        // filters.company = e.target.value;
        setCompany(e.target.value);
        // filterChange();
    }

    // function filterChange(){
    //     setSearchResults(alumniData.filter( (alumni)=> alumni.Name.toLowerCase().includes(searchQuery.toLowerCase()) && ( country? alumni.Country===country.value : true) && (alumni.Position===position || position==='') && (company==='' || alumni.Company===company ) ));
        
    // }
    

    // function focusPositionInput(){
    //     positionListContainer.current.classList.replace("hidden","flex");
    // }
    // function blurPositionInput(e){
    //     positionListContainer.current.classList.replace("flex","hidden");
    // }
    const [positionValue,setPositionValue] = useState(''); 
    function positionHandler(e){
        setPositionValue(e.target.value);
        console.log(e.target.value);
    }


    // Modal

    let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white pl-3 text-left align-middle shadow-xl transition-all">
                  
                  <ProfileCard />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
            {/* Search Component */}
            <div className="py-4 mt-3 flex flex-col items-center  bg-blue-700">
                <h1 className="text-3xl text-white ">Search</h1>
                <h1 className="text-md text-gray-100">Search from thousands of Alumnis</h1>
                <div className="mt-2 w-60 flex w-full px-5 lg:w-[45rem] lg:p-2 ">
                    <input type='text' onKeyDown={enterKeyDownHandler} onChange={queryOnChangeHandler} className="w-full h-10 pl-2 py-1 border-black border-2 rounded-l" />
                    <div onClick={searchResultsHandler} className="flex justify-center items-center bg-black w-11 rounded-r">
                        <BiSearchAlt className="text-white h-5 w-5 cursor-pointer"/>
                    </div>
                </div>
            </div>

            {/* For Mobile */}

            <div className="flex mt-4 lg:hidden justify-between items-center w-full px-5 ">
                <h1 className="text-white text-sm">200 records found</h1>
                <button className="bg-blue-700 rounded py-1 px-4">Filters</button>
            </div>


            {/* Search Filter and Results */}
            <div className=" lg:flex px-12 mt-2 gap-8 mb-8 ">
                
                {/* Search Filter Component */}
                <div className="lg:block w-[20rem] mt-10">
                    <h1 className="text-lg font-bold ">Filters</h1>
                    
                    <div className="flex flex-col gap-5 mt-4">
                        <div className="flex justify-between">
                            <button onClick={searchResultsHandler} className="bg-blue-800 text-white rounded px-4 py-1 text-sm ">Apply</button>
                            <button onClick={clearFilters} className="bg-blue-800 text-white rounded px-4 py-1 text-sm">Clear</button>
                        </div>
                        <div className="">
                            <div className="flex font-bold  justify-between items-center" onClick={() => filterDropdownHandler(regNoDropdownArrow,regNoList)}>
                                <h1>Reg No.</h1>
                                <div ref={regNoDropdownArrow} className="">
                                    <BiCaretUp className="h-5 w-5 my-1 mx-3 rotate-180" />
                                </div>
                            </div>
                            <div className="" ref={regNoList}>
                                <ul className=" flex flex-col gap-2 w-full">
                                    <li>
                                    <input type="text" className="py-1 px-2 w-60 outline rounded outline-gray-400 outline-[1px] focus:outline-2 focus:outline-blue-500" onChange={(e) => setRegNo(e.target.value)} value={regNo}  placeholder="RegNo" />
                                    </li>
                                    
                                </ul> 
                            </div>
                        </div>
                        {/* Education */}
                        <div className="">
                            <div className="flex font-bold justify-between items-center" onClick={() =>filterDropdownHandler(educationDropdownArrow, educationList)}>
                                <h1>Education</h1>
                                <div ref={educationDropdownArrow} className="">
                                    <BiCaretUp className="h-5 w-5 my-1 mx-3" />
                                </div>
                            </div>
                            <div className="h-0 hidden " ref={educationList}>
                                <ul className=" flex flex-col gap-2 w-full">
                                    <li>
                                        <Select options={sessionList} ref={sessionSelector} onChange={setSession} isClearable={true} placeholder="Session" />
                                    </li>
                                    <li>
                                        <Select options={departmentList} ref={departmentSelector} onChange={setDepartment} isClearable={true} placeholder="Department" />
                                    </li>
                                    <li>
                                        <Select options={degreeList} ref={degreeSelector} onChange={setDegree} isClearable={true} placeholder="Degree" />
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        {/* Location */}
                        <div className="">
                            <div className="flex font-bold justify-between items-center" onClick={() =>filterDropdownHandler(locationDropdownArrow, locationList)}>
                                <h1>Location</h1>
                                <div ref={locationDropdownArrow} className="">
                                    <BiCaretUp className="h-5 w-5 my-1 mx-3" />
                                </div>
                            </div>
                            <div className="h-0 hidden " ref={locationList}>
                                <ul className=" flex flex-col gap-2 w-full">
                                    <li>
                                        <Select options={countryList} onChange={setCountry} ref={countrySelector} isClearable={true} placeholder="Country" />
                                    </li>
                                    <li>
                                        <Select options={stateList} onChange={setState} ref={stateSelector} isClearable={true} placeholder="State" />
                                    </li>
                                    <li>
                                        <Select options={cityList} onChange={setCity} ref={citySelector} isClearable={true} placeholder="city" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Employment */}
                        <div className="">
                            <div className="flex font-bold justify-between items-center" onClick={() =>filterDropdownHandler(employmentDropdownArrow, employmentList)}>
                                <h1>Employment</h1>
                                <div ref={employmentDropdownArrow} className="">
                                    <BiCaretUp className="h-5 w-5 my-1 mx-3" />
                                </div>
                            </div>
                            <div className="h-0 hidden " ref={employmentList}>
                                <ul className=" flex flex-col gap-2 w-full">
                                    <li>
                                        <Select options={companyList} onChange={setCompany} ref={companySelector} isClearable={true} placeholder="Company" />
                                    </li>
                                    <li>
                                        <Select options={positionList} onChange={setPosition} ref={positionSelector} isClearable={true} placeholder="Position" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                                       
                        

                        {/* Option not Clickable, same issue like bookMyShow search */}
                        {/* <div className="relative">
                            <input id="position_input"  type="text" onFocus={focusPositionInput} onBlur={blurPositionInput} className="focus:outline-0 border-b-2 border-gray-500" placeholder="Position"/>
                            <div ref={positionListContainer} className="absolute hidden flex-col overflow-visible  w-full">
                                <ul className="pl-2 bg-gray-400 z-30 w-full h-36 overflow-y-scroll">
                                    <h1 onClick={positionHandler} value="element1">element1</h1>
                                    <h1 onClick={positionHandler} value="element2">element2</h1>
                                    <h1 onClick={positionHandler} value="element3">element3</h1>
                                    <h1 onClick={positionHandler} value="element4">element4</h1>
                                    <h1 onClick={positionHandler} value="element5">element5</h1>
                                    <h1 onClick={positionHandler} value="element6">element6</h1>
                                </ul>
                            </div>
                        </div>
                         */}
                       
                    </div>
                </div>

                {/* Search Results*/}
                <div className="h-[65vh] pt-5  w-full lg:px-2 lg:mx-auto overflow-y-scroll  ">
                    <h1 className="text-md pb-3 text-gray-600 ">{searchResults.length + ' Results found' }</h1>
                    <div className=" flex flex-col gap-3 md:grid md:grid-cols-1 items-center lg:grid-cols-3  lg:gap-x-3  lg:gap-y-3 ">
                        {searchResults.map( (alumni) => (
                        <div className="flex flex-col p-3 w-[13.8rem] h-[14.5rem] border-2 border-black rounded items-center">
                                <div className="h-20 w-20">
                                    <img src={profileImg} alt="profile" className="h-full w-full rounded-full"/>
                                </div>
                                <h1 className="text-md font-bold">{alumni.Name}</h1>
                                <h1 className="text-sm text-gray-600 text-center">{alumni.Position} at {alumni.Company}</h1>
                                <h1 className="text-sm text-gray-600">{alumni.Country}</h1>
                                
                                <button onClick={openModal} className=" mt-2 bg-blue-700 text-white text-sm rounded py-1 px-4">Message</button>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
        
    );
}
export default SearchPage;