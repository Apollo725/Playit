// import axios from 'axios'

// axios.defaults.baseURL = "http://new.whoer.net/"

class Api {

    // static getLanguages() {
    //     return axios.get('/languages');
    // }

    // static getLexicon(lan) {
        
    //     return axios.get('/lexicon', { 'headers' : {
    //         "Content-Type": "application/json",
    //         "Content-Language": lan,
    //     }});
    // }

    // access api to fetch profile data 
    static async getProfiles() {
        // return axios.get('/getProfiles');
        return {
            profiles: [{
                    name: 'avnder hodorov',
                    picture_url: '/imgs/profile1.png'
                },
                {
                    name: 'Limozina Express',
                    picture_url: '/imgs/profile2.png'
                }
            ]
        }
    }
}

export default Api;