import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client.js";


const CrewmateInfo = () => {

    let params = useParams();
    const [crewmateDetails, setCrewmateDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const { data } = await supabase
              .from('crewmates')
              .select('*')
              .eq('uuid', params.idfr);
          
            setCrewmateDetails(data);
          }
        fetchDetails().catch(console.error);
      }
      ,[]);
    console.log(crewmateDetails);

    return (
        <>
            <div>
                {crewmateDetails === null ? (
                <div>Loading...</div>
                ) : (
                <>
                    <div>
                        
                    </div>
                </>
                )}
            </div>
        </>
    );  
};
export default CrewmateInfo;