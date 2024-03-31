import React from "react";
import { Example, Erow, Ecol }  from "../../../components/Example/ExampleElements";

const Vocab1 = () => {
    return (
        <div className="Page">
            <h2>
                Vocabulary 1: Basic Nouns
            </h2>
            <p>
                A <strong>noun</strong> is a label for a person, place, or thing. In Hungarian, nouns are 
                inflected for many grammatical categories. Like English, nouns are marked for number: singular 
                or plural. Unlike English, all nouns are also inflected for case and other categories.
            </p>
            <p>
                The nouns in this lesson are in their most basic form: singular, nominative case. Later, 
                you will learn how to form plurals and noun cases.
            </p>
            <p>
                The nouns in this lesson will appear in later lessons that teach grammar. So, it is important 
                to master this vocab before moving on to later lessons.
            </p>
            <h3>
                People & Animals
            </h3>
            <Example>
                <Erow>
                    <Ecol>lany</Ecol><Ecol>girl</Ecol>
                </Erow>
                <Erow>
                    <Ecol>fiú</Ecol><Ecol>boy</Ecol>
                </Erow>
                <Erow>
                    <Ecol>nő</Ecol><Ecol>woman</Ecol>
                </Erow>
                <Erow>
                    <Ecol>férfi</Ecol><Ecol>man</Ecol>
                </Erow>
                <Erow>
                    <Ecol>baba</Ecol><Ecol>baby</Ecol>
                </Erow>
                <Erow>
                    <Ecol>ember</Ecol><Ecol>human</Ecol>
                </Erow>
                <Erow>
                    <Ecol>macska</Ecol><Ecol>cat</Ecol>
                </Erow>
                <Erow>
                    <Ecol>kutya</Ecol><Ecol>dog</Ecol>
                </Erow>
            </Example>
        </div>
    );
};
 
export default Vocab1;