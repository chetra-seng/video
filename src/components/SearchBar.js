import React, { useState } from "react";

import { Container, Form } from "semantic-ui-react";

const SearchBar = ({ onSearchTerm }) => {
    const [term, setTerm] = useState("")

    return (
        <Container>
            <Form onSubmit={(e) => {
                e.preventDefault();
                onSearchTerm(term);
            }}>
                <Form.Field>
                    <label>Video Search</label>
                    <input 
                        placeholder="Search" 
                        value={term}
                        onChange={e => {
                            setTerm(e.target.value);
                        }}
                    />
                </Form.Field>
            </Form>
        </Container>
    );
}

export default SearchBar;