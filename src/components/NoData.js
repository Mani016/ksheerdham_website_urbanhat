import React from 'react';
import nodata from "../assets/images/noData.png";

const NoData = () => {
    return (
        <div className="estimate-ship d-flex justify-content-center">
            <div className="no_data">
                <img src={nodata} alt="no-data" />
            </div>
        </div>
    )
}
export default NoData;