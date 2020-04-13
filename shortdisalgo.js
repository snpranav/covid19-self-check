function degrees_to_radians(degrees) {
    let pi = Math.PI;
    return degrees * (pi/180);
}

function algodistance2points(lat1, lng1, lat2, lng2) {
    let radius = 6371;
    let dlat = degrees_to_radians(lat2) - degrees_to_radians(lat1);
    let dlng = degrees_to_radians(lng1) - degrees_to_radians(lng2);
    lat1 = degrees_to_radians(lat1);
    lat2 = degrees_to_radians(lat2);
    let innerResult = (Math.pow(Math.sin(dlat/2), 2) + Math.pow(Math.sin(dlng/2), 2) * Math.cos(lat1) * Math.cos(lat2));
    finalResult = (2*radius*Math.asin(Math.sqrt(innerResult)));
    return finalResult;
}
