Algorithm AnalyzeSentence
    // Initialize variables
    sentenceLength := 0
    wordCount := 0
    vowelCount := 0
    vowels := {'a', 'e', 'i', 'o', 'u'}

    // Read the sentence input
    Input sentence

    // Iterate through each character in the sentence
    FOR each character in sentence DO
        // Increment sentence length
        sentenceLength := sentenceLength + 1

        // Check if the character is a letter (not punctuation)
        IF character is a letter THEN
            // If the previous character was not a letter (indicating a word boundary), increment word count
            IF previous character is not a letter THEN
                wordCount := wordCount + 1
            END_IF

            // Convert character to lowercase for vowel comparison
            character := lowercase(character)

            // Check if the character is a vowel
            IF character is a vowel THEN
                vowelCount := vowelCount + 1
            END_IF
        END_IF
    END_FOR

    // Output results
    Output "Length of the sentence:", sentenceLength
    Output "Number of words in the sentence:", wordCount
    Output "Number of vowels in the sentence:", vowelCount
End Algorithm
