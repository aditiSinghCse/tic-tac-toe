import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import PlayArea from "../screens/playArea";

const setUp = (props = {}) => {
    configure({adapter: new Adapter()});
    const component = shallow(<PlayArea props={props} />);
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

    //checking UI exists;
    it("checking if playarea exists", done => {
        const wrapper = component.find(".playarea");
        expect(wrapper.length).toBe(1);
        done();
    });

    it("checking if outer board exists", done => {
        const boardDiv = component.find(".board");
        expect(boardDiv.length).toBe(1);
        done();
    });

    it("checking 3 rows exists on the board", done => {
        const boardRow = component.find(".board-row");
        expect(boardRow.length).toBe(3);
        done();
    });

    it("checking if total 9 boxes exists on the board", done => {
        const boxes = component.find(".box");
        expect(boxes.length).toBe(9);
        done();
    });
});