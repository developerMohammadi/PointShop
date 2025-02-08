export function NationalCodeValidate(nationalId: string): boolean {
    if (nationalId.length <= 9 || nationalId.length > 10) {

        return false;
    }

    const sameNumbers = Array.from(
        {length: 10},
        (_, i) => `${i}${i}${i}${i}${i}${i}${i}${i}${i}${i}`
    );
    if (sameNumbers.includes(nationalId)) {

        return false;
    }

    if (nationalId.length < 10) {
        const zeroNeeded = 10 - nationalId.length;
        const zeroString = zeroNeeded === 2 ? "00" : "0";
        nationalId = zeroString.concat(nationalId);
    }

    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(nationalId.charAt(i), 10) * (10 - i);
    }

    const mod = sum % 11;

    let finalValue: number;
    if (mod >= 2) {
        finalValue = 11 - mod;
    } else {
        finalValue = mod;
    }

    if (finalValue.toString() === nationalId.charAt(9)) {

        return true;
    } else {

        return false;
    }
}
