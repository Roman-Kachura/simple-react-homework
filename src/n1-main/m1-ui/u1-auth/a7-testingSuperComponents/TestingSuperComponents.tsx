import React from "react";
import SuperButton from "../../u6-common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../u6-common/c3-SuperCheckbox/SuperCheckbox";
import SuperInputText from "../../u6-common/c1-SuperInputText/SuperInputText";

export const TestingSuperComponents = () => {
    return(
        <div className={'container'}>
            <div>
                <SuperButton>Default</SuperButton>
                <SuperButton red>Red</SuperButton>
                <SuperButton disabled>Disabled</SuperButton>
            </div>

            <SuperCheckbox>Checkbox</SuperCheckbox>
            <SuperInputText placeholder={'Input'}/>
        </div>
    )
}