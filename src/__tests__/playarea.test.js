import React from "react";
import { mount } from "enzyme";
import PlayArea from "../screens/playArea";

const setUp = (props = {}) => {
    const component = mount(<PlayArea props={props} />);
    return component;
};

describe("Testing Play Area", () => {
    let component;
    let props = {};
    beforeEach(() => {
        component = setUp({
            ...props,
        });
    });

    it("checking if playarea exists", done => {
        const wrapper = component.find(".playarea");
        expect(wrapper.length).toBe(1);
        done();
    });

    it("checking if outer board exists", done => {
        const challengeHeadDiv = component.find(".board");
        expect(challengeHeadDiv.length).toBe(1);
        done();
    });

    it("checking 3 rows exists on the board", done => {
        const backButton = component.find(".board-row");
        expect(backButton.length).toBe(3);
        done();
    });

    it("checking if total 9 boxes exists on the board", done => {
        const challengeContentDiv = component.find(".box");
        expect(challengeContentDiv.length).toBe(9);
        done();
    });

});