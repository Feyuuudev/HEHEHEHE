function findRoots(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;

    if (a === 0) {
        return "Koefisien 'a' tidak boleh nol.";
    } else if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Akar-akar adalah: ${root1.toFixed(2)} dan ${root2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return `Akar kembar adalah: ${root.toFixed(2)}`;
    } else {
        return "Tidak ada akar real.";
    }
}

// Contoh penggunaan:
const a = 1;  // Koefisien a
const b = -3; // Koefisien b
const c = 2;  // Koefisien c
console.log(findRoots(a, b, c));