import React from "react";
import { Example, Erow, Ecol }  from "../../../components/Example/ExampleElements";
import { Vocab, Vrow, Vcol } from "../../../components/Vocab/VocabElements";

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
            <Vocab>
                <Vrow>
                    <Vcol>lany</Vcol><Vcol>girl</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>fiú</Vcol><Vcol>boy</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>nő</Vcol><Vcol>woman</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>férfi</Vcol><Vcol>man</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>baba</Vcol><Vcol>baby</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>ember</Vcol><Vcol>human</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>macska</Vcol><Vcol>cat</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>kutya</Vcol><Vcol>dog</Vcol>
                </Vrow>
            </Vocab>
            <h3>
                Food & Drink
            </h3>
            <Vocab>
                <Vrow>
                    <Vcol>reggeli</Vcol><Vcol>breakfast</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>ebéd</Vcol><Vcol>lunch</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>vacsora</Vcol><Vcol>dinner</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>víz</Vcol><Vcol>water</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>tej</Vcol><Vcol>milk</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>kávé</Vcol><Vcol>coffee</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>tea</Vcol><Vcol>tea</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>kenyér</Vcol><Vcol>bread</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>sajt</Vcol><Vcol>cheese</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>hús</Vcol><Vcol>meat</Vcol>
                </Vrow>
                <Vrow>
                    <Vcol>szendvics</Vcol><Vcol>sandwich</Vcol>
                </Vrow>
            </Vocab>
        </div>
    );
};
 
export default Vocab1;