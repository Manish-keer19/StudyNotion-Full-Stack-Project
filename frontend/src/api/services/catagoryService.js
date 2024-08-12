

// Using fetch method
class CatagoryService {
  async gellAllCatagory(token) {
    try {
     
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/catagory/gellAllCatagory",
        {
          method: "GET",
          headers: {
            Authorization:`Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
   

    } catch (error) {
      throw error;
    }
  }
}
export const catagoryService = new CatagoryService();




// //  using axios -..*************---->>>

// export const catagoryService = new CatagoryService();
// import { axiosInstance } from "./axiosInstance";

// class CatagoryService {
//   async gellAllCatagory(token) {
//     try {
//       // const response = await axiosInstance.get('/catagory/gellAllCatagory',{
//       //     headers: {
//       //         'Authorization': `Bearer ${token}`
//       //     }
//       // })
//       const response = await fetch(
//         import.meta.env.VITE_API_URL + "/catagory/gellAllCatagory",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = (await response).json();
//       return data;
   

//     } catch (error) {
//       throw error;
//     }
//   }
// }

// export const catagoryService = new CatagoryService();

