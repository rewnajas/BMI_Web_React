function Validate(height, weight, age, sex, BMI){
    if (height < 100 || height > 300){
        return false;
    }

    else if (weight < 15 || weight > 300){
        return false;
    }

    else if (age < 2 || age > 100){
        return false;
    }

    else if (sex != 'M' || sex != 'F'){
        return false;
    }

    return true; //Validate pass
}