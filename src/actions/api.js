import axios from "axios";

const baseUrl = "http://localhost:5000/api/"





export default {


//Blood Donors Api
    dCandidate(url = baseUrl + 'DCandidates/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
,
//Blood Patients Api
    BloodPatient(url = baseUrl + 'BloodPatients/') {
        return {
            fetchAllPatients: () => axios.get(url),
            fetchByIdPatients: id => axios.get(url + id),
            createPatients: newRecord => axios.post(url, newRecord),
            updatePatients: (id, updateRecord) => axios.put(url + id, updateRecord),
            deletePatients: id => axios.delete(url + id)
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


