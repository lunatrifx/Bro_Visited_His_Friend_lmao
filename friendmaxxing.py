import spacy

# Load the English NLP model
try:
    nlp = spacy.load("en_core_web_sm")
except OSError:
    # Download the model if not already downloaded
    from spacy.cli import download
    download("en_core_web_sm")
    nlp = spacy.load("en_core_web_sm")

def extract_key_word(phrase):
    doc = nlp(phrase)
    key_word = ""
    for token in doc:
        if token.pos_ in ["NOUN", "VERB"]:
            key_word = token.text
    return key_word

def create_meme(phrase):
    key_word = extract_key_word(phrase)
    if key_word:
        meme_response = f"bro is {key_word}maxxing"
    else:
        meme_response = "bro is maxxing"
    return meme_response

# Main function to run the project
def main():
    print("Enter a phrase: ")
    phrase = input()
    meme_response = create_meme(phrase)
    print(meme_response)

if __name__ == "__main__":
    main()
