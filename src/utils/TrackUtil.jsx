class TrackUtil {

    static getMinutage(durationMs){
        const minutes = Math.floor(durationMs / 60000); 
        const seconds = Math.floor((durationMs % 60000) / 1000);

        const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        return formattedTime;
    };
    
}

export default TrackUtil;