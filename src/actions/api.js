import axios from "axios";
import authHeader from './Authorization';
const baseUrl = "http://localhost:5000/api/"





export default {


//Blood Donors Api
    dCandidate(url = baseUrl + 'DCandidates/') {
        return {
            fetchAll: () => axios.get(url, { headers: authHeader() }),
            fetchById: id => axios.get(url + id, { headers: authHeader() }),
            create: newRecord => axios.post(url, newRecord, { headers: authHeader() }),
            update: (id, updateRecord) => axios.put(url + id, updateRecord, { headers: authHeader() }),
            delete: id => axios.delete(url + id, { headers: authHeader() })
        }
    }
,
//Blood Patients Api
    BloodPatient(url = baseUrl + 'BloodPatients/') {
        return {
            fetchAllPatients: () => axios.get(url, { headers: authHeader() }),
            fetchByIdPatients: id => axios.get(url + id, { headers: authHeader() }),
            createPatients: newRecord => axios.post(url, newRecord, { headers: authHeader() }),
            updatePatients: (id, updateRecord) => axios.put(url + id, updateRecord, { headers: authHeader() }),
            deletePatients: id => axios.delete(url + id, { headers: authHeader() })
        }

        

    
    },

// Registration Api
    HospitalAdmin(url = baseUrl + 'Auth/RegisterAdmin') {

        return{
            create: newRecord => axios.post(url, newRecord)
        }
    },

//Login Api
 Login (url = baseUrl + 'Auth/Login') {

    return{
         log : (username, password) => {
            return axios
              .post(url, {username,password,})
              .then((response) => {
                if (response.data.token) {
                  localStorage.setItem("user", JSON.stringify(response.data));
                }
          
                return response.data;
              })

              
          },

          logout: () =>{
            localStorage.removeItem("user");
          }

          
    }
}




}


