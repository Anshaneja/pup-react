import React, { useState, Component } from "react";
import { Container, Paper } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Box, Alert, AlertTitle,
} from "@mui/material";
import {
  useForm,
  FormProvider,
} from "react-hook-form";


function getSteps() {
  return [
    "Association with Punjabi University ",
    "Basic information",
    "Present Profession",
  ];
}
const Association = () => {
  const [degree, setDegree] = useState([{ sucess: "" }])
  const addDegree = () => {
    console.log(degree);
    setDegree([...degree, { sucess: "" }])
  }
  const removeDegree = () => {
    if (degree.length > 1) {
      degree.pop();
      setDegree([...degree])
    }
  }
  return (
    <>
      <div className="mt-10">

        <div className="flex flex-row gap-4 justify-center" >
          <div className="flex flex-col">
            <h6 className=" text-center">Year of Joining</h6>
            <TextField
              id="outlined-number"
              label="From"
              type="number"
              placeholder="Year ex-1991"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className="flex flex-col">
            <h6 className="text-center">Year of Leaving</h6>
            <TextField
              id="outlined-number"
              label="From"
              type="number"
              placeholder="Year ex-2001"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>


        </div>
        <TextField
          id="outlined-number"
          label="University Registration Number"
          type="number"
          placeholder="ex- 7102223644"
          fullWidth
          margin="normal"
        />
        {degree.map((one) => {
          return (<>
            <TextField
              id="name"
              label="Degree's"
              variant="outlined"
              placeholder="Enter name of Your Degree"
              fullWidth
              margin="normal"

            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Department"

              >
                <MenuItem value="0">-Select-</MenuItem>
                <MenuItem value="112">Academic Affairs</MenuItem>
                <MenuItem value="2">Alumni Association</MenuItem>
                <MenuItem value="152">Baba Farid Centre for Sufi Studies</MenuItem>
                <MenuItem value="3">Basic And Applied Sciences</MenuItem>
                <MenuItem value="157">Bhagwan Parshuram Chair  for Indian Culture and literature</MenuItem>
                <MenuItem value="4">Bhai Gurdas Chair</MenuItem>
                <MenuItem value="111">Bhai Randhir Singh Online Gurmat Sangeet Library</MenuItem>
                <MenuItem value="5">Biotechnology</MenuItem>
                <MenuItem value="6">Botany</MenuItem>
                <MenuItem value="165">Center for Artificial Intelligence and Data Sciences (CRAIDS)</MenuItem>
                <MenuItem value="173">Central Workshop (Engineering Wing)</MenuItem>
                <MenuItem value="7">Centre for Advanced Media Studies</MenuItem>
                <MenuItem value="164">Centre for Artificial Intelligence and Data Sciences</MenuItem>
                <MenuItem value="8">Centre for Census Studies and Research</MenuItem>
                <MenuItem value="9">Centre for Devel. Economics and Innovation Studies</MenuItem>
                <MenuItem value="10">Centre for Diaspora Studies</MenuItem>
                <MenuItem value="2188">Centre for E-Learning and Teaching Excellence(CELTE)</MenuItem>
                <MenuItem value="1188">Centre for Research in Economic Change</MenuItem>
                <MenuItem value="188">Centre for Restoration of Ecosystem of Punjab (CRESP)</MenuItem>
                <MenuItem value="11">Centre for South West Asia Study</MenuItem>
                <MenuItem value="12">Centrlized Admission Cell</MenuItem>
                <MenuItem value="13">Chemistry</MenuItem>
                <MenuItem value="14">Civil Engineering Department</MenuItem>
                <MenuItem value="122">College Of Engineering and Management, Punjabi University Neighbourhood Campus, Rampura Phul</MenuItem>
                <MenuItem value="17">Commerce</MenuItem>
                <MenuItem value="19">Computer Science</MenuItem>
                <MenuItem value="172">Constituent Colleges</MenuItem>
                <MenuItem value="20">Dance</MenuItem>
                <MenuItem value="21">Defence And Strategic Studies</MenuItem>
                <MenuItem value="18">Department of Computer Science and Engineering</MenuItem>
                <MenuItem value="147">Department of Development of Punjabi Language</MenuItem>
                <MenuItem value="22">Directorate of International Affairs</MenuItem>
                <MenuItem value="23">Directorate of Sports</MenuItem>
                <MenuItem value="113">Dispensary</MenuItem>
                <MenuItem value="25">Distance Education Department</MenuItem>
                <MenuItem value="26">Dr. Balbir Singh Sahitya Kendra Dehradun</MenuItem>
                <MenuItem value="27">Economics</MenuItem>
                <MenuItem value="28">Education And Community Service</MenuItem>
                <MenuItem value="29">Educational Multimedia Research Centre</MenuItem>
                <MenuItem value="30">Electronics And Communication Engineering Department</MenuItem>
                <MenuItem value="31">English</MenuItem>
                <MenuItem value="32">Entrepreneurship and Skill Development Cell</MenuItem>
                <MenuItem value="186">Entrepreneurship, Innovation and Career Hub</MenuItem>
                <MenuItem value="187">External Campuses</MenuItem>
                <MenuItem value="99">Faculty of Art and Culture</MenuItem>
                <MenuItem value="100">Faculty of Business Studies</MenuItem>
                <MenuItem value="151">Faculty of Computing Sciences</MenuItem>
                <MenuItem value="101">Faculty of Education and Informantion Science</MenuItem>
                <MenuItem value="102">Faculty of Engineering &amp; Technology</MenuItem>
                <MenuItem value="106">Faculty of Languages</MenuItem>
                <MenuItem value="103">Faculty of Law</MenuItem>
                <MenuItem value="104">Faculty of Life Sciences</MenuItem>
                <MenuItem value="98">Faculty of Medicine</MenuItem>
                <MenuItem value="105">Faculty of Physical Sciences</MenuItem>
                <MenuItem value="107">Faculty of Social Sciences</MenuItem>
                <MenuItem value="36">Foreign Languages</MenuItem>
                <MenuItem value="37">Forensic Science</MenuItem>
                <MenuItem value="38">Geography</MenuItem>
                <MenuItem value="124">Gurmat Gyan Online Study Centre</MenuItem>
                <MenuItem value="40">Gurmat Sangeet</MenuItem>
                <MenuItem value="41">Gurmat Sangeet Chair</MenuItem>
                <MenuItem value="42">Hindi</MenuItem>
                <MenuItem value="43">History</MenuItem>
                <MenuItem value="44">Human Genetics Department</MenuItem>
                <MenuItem value="45">IAS Training Centre</MenuItem>
                <MenuItem value="179">IHRMS (Integrated Human Resource Management System)</MenuItem>
                <MenuItem value="47">Intellectual Property Rights (IPRs) Cell</MenuItem>
                <MenuItem value="181">Internal Audit Cell</MenuItem>
                <MenuItem value="46">Internal Quality Assurance (IQAC) Cell</MenuItem>
                <MenuItem value="48">Journalism And Mass Communications</MenuItem>
                <MenuItem value="49">Law</MenuItem>
                <MenuItem value="1189">Legal Affairs</MenuItem>
                <MenuItem value="110">Legal Cell</MenuItem>
                <MenuItem value="109">Library</MenuItem>
                <MenuItem value="50">Library &amp; Information Science</MenuItem>
                <MenuItem value="51">Linguistics And Punjabi Lexicography</MenuItem>
                <MenuItem value="52">Maharishi Valmiki Chair Punjabi University</MenuItem>
                <MenuItem value="133">Mata Sundri University Girls College, Mansa</MenuItem>
                <MenuItem value="53">Mathematics</MenuItem>
                <MenuItem value="54">Mechanical Engineering Department</MenuItem>
                <MenuItem value="55">Music</MenuItem>
                <MenuItem value="180">National Academic Depository (NAD)</MenuItem>
                <MenuItem value="155">National Service Scheme Department</MenuItem>
                <MenuItem value="123">Nawab Sher Mohammad Khan Institute of Advanced Studies in Urdu, Persian and Arabic, Malerkotla</MenuItem>
                <MenuItem value="57">Persian, Urdu And Arabic</MenuItem>
                <MenuItem value="59">Pharmaceutical Sciences And Drug Research</MenuItem>
                <MenuItem value="60">Philosophy</MenuItem>
                <MenuItem value="61">Physical Education</MenuItem>
                <MenuItem value="62">Physics</MenuItem>
                <MenuItem value="63">Physiotherapy Department</MenuItem>
                <MenuItem value="64">Placement Cell</MenuItem>
                <MenuItem value="156">Planning and Monitoring</MenuItem>
                <MenuItem value="65">Political Science</MenuItem>
                <MenuItem value="66">Prevention of Women Harassment Cell</MenuItem>
                <MenuItem value="67">Prof. Harbans Singh Encyclopaedia Of Sikhism</MenuItem>
                <MenuItem value="68">Psychology</MenuItem>
                <MenuItem value="69">Public Administration</MenuItem>
                <MenuItem value="182">Public Relations</MenuItem>
                <MenuItem value="184">Publication Bureau and Press</MenuItem>
                <MenuItem value="70">Punjab Historical Studies</MenuItem>
                <MenuItem value="71">Punjab School Of Law</MenuItem>
                <MenuItem value="153">Punjabi Computer Help Center</MenuItem>
                <MenuItem value="72">Punjabi Department</MenuItem>
                <MenuItem value="73">Punjabi Literary Studies</MenuItem>
                <MenuItem value="116">Punjabi University Akali Phoola Singh Neighbourhood Campus, Dehla Seehan, Sangrur</MenuItem>
                <MenuItem value="115">Punjabi University Baba Dhian Dass Neighbourhood Campus, Jhuneer, Mansa</MenuItem>
                <MenuItem value="119">Punjabi University Campus, Maur, Bathinda</MenuItem>
                <MenuItem value="148">Punjabi University Guru Kashi Campus Talwandi Sabo, Department of Business Studies</MenuItem>
                <MenuItem value="114">Punjabi University Guru Kashi Campus Talwandi Sabo, Yadavindra College of Engineering (YCOE)</MenuItem>
                <MenuItem value="166">Punjabi University Human Resource Center</MenuItem>
                <MenuItem value="118">Punjabi University Neighbourhood Campus , Jaito, Faridkot</MenuItem>
                <MenuItem value="121">Punjabi University Regional Centre for Information Technology and Management, Mohali</MenuItem>
                <MenuItem value="150">Punjabi University Regional Centre, Bathinda, Department of Education</MenuItem>
                <MenuItem value="149">Punjabi University Regional Centre, Bathinda, Department of Law</MenuItem>
                <MenuItem value="120">Punjabi University Regional Centre, Bathinda, Department of Postgraduate Studies</MenuItem>
                <MenuItem value="138">Punjabi University T.P.D. College, Rampura  Phul.</MenuItem>
                <MenuItem value="117">Punjabi University, Baba Jogi Peer Neighbourhood Campus, Ralla, Mansa</MenuItem>
                <MenuItem value="143">Punjabipedia Centre</MenuItem>
                <MenuItem value="185">PunjabiPedia Centre</MenuItem>
                <MenuItem value="144">Registrar Office</MenuItem>
                <MenuItem value="74">Religious Studies</MenuItem>
                <MenuItem value="175">Research Centre for Technology Development for Differently Abled Persons</MenuItem>
                <MenuItem value="3189">Research Centre For The Technical Development Of Punjabi Language, Literature And Culture.</MenuItem>
                <MenuItem value="75">Right to Information Cell</MenuItem>
                <MenuItem value="76">Right to Service, Punjab Cell</MenuItem>
                <MenuItem value="135">S. Balraj Singh Bhunder Mamorial University College, Sardulgarh</MenuItem>
                <MenuItem value="35">S. Sobha Singh Department Of Fine Arts</MenuItem>
                <MenuItem value="77">Sanskrit And Pali</MenuItem>
                <MenuItem value="79">School Of Management Studies</MenuItem>
                <MenuItem value="80">School Of Social Sciences</MenuItem>
                <MenuItem value="154">Shahid Kartar Singh Sarabha Chair</MenuItem>
                <MenuItem value="81">Social Work</MenuItem>
                <MenuItem value="82">Sociology And Social Anthropology</MenuItem>
                <MenuItem value="161">Sophisticated Instruments Centre</MenuItem>
                <MenuItem value="83">Sports Science</MenuItem>
                <MenuItem value="85">Sri Guru Tegh Bahadur National Integration Chair</MenuItem>
                <MenuItem value="86">Statistics</MenuItem>
                <MenuItem value="108">Student Welfare</MenuItem>
                <MenuItem value="183">SVEEP, Systematic Voters Education and Electoral Participation Programme</MenuItem>
                <MenuItem value="3188">The Universal Human Values Cell</MenuItem>
                <MenuItem value="89">Theatre And Television</MenuItem>
                <MenuItem value="90">Tourism, Hospitality And Hotel Management</MenuItem>
                <MenuItem value="91">Translation Cell</MenuItem>
                <MenuItem value="145">Transport and Security Department</MenuItem>
                <MenuItem value="92">UGC-HRDC</MenuItem>
                <MenuItem value="142">University College, Bahadurpur (Mansa)</MenuItem>
                <MenuItem value="140">University College, Barnala</MenuItem>
                <MenuItem value="141">University College, Benra (Dhuri)</MenuItem>
                <MenuItem value="131">University College, Chuni Kalan</MenuItem>
                <MenuItem value="134">University College, Dhilwan</MenuItem>
                <MenuItem value="129">University College, Ghanaur</MenuItem>
                <MenuItem value="127">University College, Ghudda (Bathinda)</MenuItem>
                <MenuItem value="139">University College, Jaito</MenuItem>
                <MenuItem value="130">University College, Miranpur</MenuItem>
                <MenuItem value="132">University College, Moonak</MenuItem>
                <MenuItem value="93">University Computer Centre</MenuItem>
                <MenuItem value="78">University School Of Applied Management</MenuItem>
                <MenuItem value="146">Vehicle Pass Cell</MenuItem>
                <MenuItem value="97">Vice-Chancellor&#39;s Office</MenuItem>
                <MenuItem value="94">Women&#39;s Studies Centre</MenuItem>
                <MenuItem value="95">Youth Welfare Department</MenuItem>
                <MenuItem value="96">Zoology And Environmental Sciences</MenuItem>
              </Select>
            </FormControl>
            <h6>Example :- Degree or certificate verifying your association with Uni.</h6>
            <TextField
              fullWidth
              type="file"
              label="Proof of Assosiation"
              name="url"
              variant="outlined"
              focused
              margin="normal"

            />
          </>)
        })}
        <div className="flex flex-row gap-2 justify-end">
          <Button variant="contained" onClick={removeDegree} color="error">Remove</Button>
          <Button variant='contained' margin="normal" onClick={addDegree} >+Add More Degree</Button>
        </div>
      </div>
    </>
  );
};
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const BasicInfo = () => {
  const [addSocial, setAddSocial] = useState([
    { social: '' },
  ])

  const addNew = () => {
    setAddSocial([...addSocial, { social: '' }]);
  }

  function RemoveNew() {
    if (addSocial.length > 1) {
      addSocial.pop();
      setAddSocial([...addSocial])
    }
  }



  return (
    <>
      <div className="flex flex-row gap-4 justify-center">
        <TextField
          required
          id="first_name"
          label="First Name"
          placeholder="Enter your name"
          margin="normal"
          fullWidth
        />
        <TextField
          required
          id="last_name"
          label="Last Name"
          placeholder="Enter your name"
          margin="normal"
          fullWidth
        />
      </div>
      <TextField
        required
        id="dob"
        label="Date of Birth"
        type="date"
        placeholder=" "
        margin="normal"
        fullWidth
        focused
      />
      <div className="flex flex-row gap-4 justify-center">
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          placeholder="eg. example@gmail.com"
          margin="normal"
          fullWidth
        />
        <div className="flex flex-col w-full">
          <TextField

            id="phone"
            label="Phone Number"
            type="number"
            placeholder="eg. 1234567890"
            margin="normal"
            required
            fullWidth
          />
          <p className="font-light">For office use only</p>
        </div>
      </div>
      <TextField
      type="file"
      label="profile picture"
      focused
      />
      <p className="font-light">only .png and .jpeg are supported</p>

      <h6 className="pt-2">Social Media Accounts</h6>
      {addSocial.map((one, index) => {
        return (<>
          <div className='flex flex-row'>
            <TextField

              id="socilAccount"
              label="Social media accounts"
              placeholder="eg. Facebook,Twitter,"
              margin="normal"

            />
            <FormGroup className='m-auto'>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Do you want your account to be public" />
            </FormGroup>


          </div>


        </>)

      })}
      <span className='h-2 m-auto'>
        <Button variant="contained" margin="normal" onClick={addNew} >
          +  Add New

        </Button>
      </span>
      <span className='h-2 m-auto px-2'>
        <Button variant="contained" color="error" margin="normal" onClick={RemoveNew} >
          Remove
        </Button>
      </span>


    </>
  );
};
const PresentOccupation = () => {
  const [addOccupation, setAddOccupation] = useState([
    { social: '' },
  ])

  const addNew = () => {
    setAddOccupation([...addOccupation, { social: '' }]);
  }

  function RemoveNew() {
    if (addOccupation.length > 1) {
      addOccupation.pop();
      setAddOccupation([...addOccupation])
    }
  }


  return (
    <>

      <div>
        {addOccupation.map((one) => {
          return (<>
            <div className="flex flex-row gap-4 justify-center">
              <TextField
                id="Occupation"
                label="Profession"
                placeholder="eg. Engineer, Politician, Police"
                fullWidth
                margin="normal"
              />
              <TextField
                id="Position"
                label="Position/Designation"
                placeholder="eg. IAS Officer, Judge, CEO"
                fullWidth
                margin="normal"
              />
            </div>
            <br />
            <TextareaAutosize
              aria-label="minimum height"
              minRows={2}
              placeholder="if your are presently serving Please describe"
              fullWidth
              margin="normal"
              className="w-full outline px-4 pt-2 outline-[#c4c4c4] outline-1 rounded"

            />
            <div className="flex flex-row gap-4 justify-center">
              <TextField
                required
                id="City"
                label="City"
                placeholder="eg. Agra,Toronto"
                fullWidth
                margin="normal"
              />
              <TextField
                required
                id="postal"
                label="Postal Code"
                type="number"
                placeholder="eg. 147001"
                fullWidth
                margin="normal"
              />
              <TextField
                id="Country"
                required
                label="Country"
                placeholder="eg. India, Canada"
                fullWidth
                margin="normal"
              />
            </div>
          </>)
        })}
        <br />
        <span className='h-2 m-auto'>
          <Button variant="contained" margin="normal" onClick={addNew} >
            +  Add New

          </Button>
        </span>
        <span className='h-2 m-auto px-2'>
          <Button variant="contained" color="error" margin="normal" onClick={RemoveNew} >
            Remove
          </Button>
        </span>
      </div>
    </>



  );
};


const EducationalInfo = () => {
  return (<>
    <TextField
      margin='normal'
      label="Higesht Educational Degree"
      placeholder="Degree"
      fullWidth
    />
    <div className="flex flex-row gap-4 justify-center ">
      <TextField
        margin='normal'
        label="Name of Department"
        placeholder="eg. Department of Computer Science"
        fullWidth
      />
      <TextField
        margin='normal'
        label="Institution"
        placeholder="eg. Punjabi University"
        fullWidth
      />

    </div>
    <h6 className=" text-center">Session</h6>
    <div className="flex flex-row gap-4 justify-center" >
      <TextField
        id="year of joining"
        label="From"
        type="number"
        placeholder="Year ex-2000"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="yearOfcompletion"
        label="To"
        type="number"
        placeholder="Year ex-2005"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"

      />
    </div>

    <TextField
      id="proof"
      label='Proof Of Degree'
      type='file'
      focused
      margin='normal'
      fullWidth
    />
  </>
  )
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Association />;
    case 1:
      return <BasicInfo />;
    case 2:
      return <PresentOccupation />;
    default:
      return "unknown step";
  }
}

const SignUp = () => {
  const methods = useForm({
    defaultValues: {
      Name: "",
      FatherName: "",
      Position: "",
      Profile: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();


  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if (activeStep == steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="w-full bg-[#eff6fc]">
    <div className=" flex flex-row gap-4 justify-evenly ">
      <div className="w-3/4 mt-[8rem]">
        <h3 className="font-normal text-xl text-left p-3 ml-12 ">
      SUBSCRIPTION FOR MEMBERSHIP
      </h3>
        <div className=" mr-5 ml-10 text-justify ">
       
      <ol className=" list-inside list-decimal text-left space-x-4 text-justify">
        <li className="ml-4 text-justify">A person may become a patron of this Association by donating a sum of at least of Rs. 50,000/- or moreÂ (NRI/Overseas : US$ 10,000 or equivalent with approval of the Chief Patron).</li><br></br>
        <li>Donor Member: by donating Rs. 20,000/- or more (NRI/Overseas : US$ 4000 or equivalent).</li><br></br>
        <li>Life Member: Rs. 1000/- (NRI/Overseas : US$ 100 or equivalent).</li><br></br>
        <li>Ordinary Member: Rs. 100 per annum (financial year basis).</li><br></br>
        <li>Honorary Member: On whom Membership is conferred by the Association.</li>
      </ol>
      </div>
      </div>
      <Container component={Box} p={4} className='w-full'>
        <Paper component={Box} p={3}>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {activeStep === steps.length ? (
            <Typography variant="h3" align="Center"><Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              You have sucessfully filled the form <strong>check  your email!</strong>
            </Alert></Typography>
          ) : (
            <>
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleNext)}>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 4 }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      variant="contained"
                      color="primary"
                    >
                      back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button

                      variant="contained"
                      color="primary"
                      type="submit"
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}

                    </Button>
                  </Box>
                </form>
              </FormProvider>
            </>
          )}
        </Paper>
      </Container>
    </div>
    </div>
  );
};

export default SignUp;
const positionMenuItem = [
  { label: 'Hr' },
  { label: 'Other' },

];