export default function isValidate(options = {}) {
    const {
        vHeight = undefined,
        vWeight = undefined,
        vAge = undefined,
        vSex = undefined,
    } = options;

    if (vHeight !== undefined && (vHeight < 100 || vHeight > 300 || isNaN(vHeight))) {
        return false;
    }

    if (vWeight !== undefined && (vWeight < 15 || vWeight > 300 || isNaN(vWeight))) {
        return false;
    }

    if (vAge !== undefined && (vAge < 2 || vAge > 100 || isNaN(vAge))) {
        return false;
    }

    if (vSex !== undefined && vSex !== 'M' && vSex !== 'F') {
        return false;
    }

    return true; // Validation passed
}
