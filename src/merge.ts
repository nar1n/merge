export function merge(collection1: number[], collection2: number[]): number[] {
    // Initialise a new array to hold the merged collection
    const mergedCollection: number[] = [];

    // Start at the beginning of both collections
    let index1 = 0;
    let index2 = 0;

    // Loop until the end of one of the collections is reached
    while (index1 < collection1.length && index2 < collection2.length) {
        // Check which item in each collection is smaller
        if (collection1[index1] < collection2[index2]) {
            // Add the current item in collection1 to the merged collection and increment index
            mergedCollection.push(collection1[index1]);
            index1++;
        } else {
            // Add the current item in collection2 to the merged collection and increment index
            mergedCollection.push(collection2[index2]);
            index2++;
        }
    }

    // Add any remaining items in collection1 to the merged collection
    while (index1 < collection1.length) {
        mergedCollection.push(collection1[index1]);
        index1++;
    }

    // Add any remaining items in collection2 to the merged collection
    while (index2 < collection2.length) {
        mergedCollection.push(collection2[index2]);
        index2++;
    }

    return mergedCollection;
}