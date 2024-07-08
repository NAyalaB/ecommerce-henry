import { useAuth } from "@/context/AuthContext";
import Avvvatars from "avvvatars-react";
import React from "react";



const ImagenAvatar= () => {
    
    const { userData } = useAuth();
    console.log(userData, "userDataaaaaaaa"); 

    return (
      
        <div >
        {userData?.token ? (
          

            <div className=" bg-gradient-to-br from-skin-400 to-blue-300 via-green-300  rounded-full border-2 p-1">

                <Avvvatars
                value={userData.user.email}
                style="shape"
                size={44}
                shadow={true}
                border={true}
               
                borderSize={15}
                    />
            </div>

      
        ) : (
            <Avvvatars  
            value=""/>
          
        )}
    </div>
);
};
  
  export default ImagenAvatar; 


  