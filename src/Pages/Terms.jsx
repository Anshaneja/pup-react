import React from 'react'
import { Link } from "react-router-dom";

const Terms = () => {
  return (
  <>
  <div className=' ml-24 mr-24'>
  <h1 className=' text-center text-2xl font-bold'>Terms And Conditions</h1>
  <ol className='mt-4 list-disc p-4 text-justify'>
  <li><span className='font-bold text-justify'>Corporate Customer: </span> Firm/Company/Institution (F/C/I) collecting payment from their beneficiaries.</li>
  <li><span className='font-bold text-justify'>User: </span>The beneficiary making a payment to F/C/I for the services/goods availed.</li>
  <li>Bank shall not be responsible, in any way, for the quality or merchantability of any product/merchandise or any of the services related thereto, whatsoever, offered to the User by the Corporate Customer. Any disputes regarding the same or delivery of the Service or otherwise will be settled between Corporate Customer and the User and Bank shall not be a party to any such dispute. Any request for refund by the User on any grounds whatsoever should be taken up directly with the Corporate Customer and the Bank will not be concerned with such a request.</li>
  <li>Bank takes no responsibility in respect of the services provided and User shall not be entitled to make any claim against the Bank for deficiency in the services provided by the Corporate Customer.</li>
  <li>The User shall not publish, display, upload or transmit any information prohibited under Rule 3(2) of the Information Technology (Intermediaries guidelines) Rules, 2011.</li>
  <li>In case of non-compliance of the terms and conditions of usage by the User, the Bank has the right to immediately terminate the access or usage rights of the User to the computer resource of the Bank and remove the non-compliant information.</li>
  </ol>
  <div class="mt-2">
    <label class="inline-flex items-center">
      <input type="checkbox" className='h-4 w-4' />
      <span className='ml-2 text-justify'>I have read and accepted the terms and conditions stated above. <br />
      (Click Check Box to proceed for payment.)
      </span>
    </label>
  </div>
  </div> 
  <Link
    to={"/member"}>
  <div className='ml-96 mt-8 bg-blue-700  hover:bg-gray-400 w-28 h-11 text-gray-800 font-bold py-2 px-4   rounded-lg'>
      <h1 className='text-white text-center'>Proceed</h1>
  </div>
  </Link>
  </>
  )
}

export default Terms;