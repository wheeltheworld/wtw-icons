import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const MeasuringTapeCircled: IconComponent = (props) => {
    return (
        <Icon viewBox="0 0 14 10" fill="none" {...props}>
        <svg width="14" height="14" viewBox="0 0 64 84" fill="none" xmlns="http://www.w3.org/2000/svg" ><rect width="64" height="64" rx="31" fill="#fff"/><g opacity=".6" filter="url(#a)"><path fill="url(#b)" shape-rendering="crispEdges" d="M12 12h40v40H12z"/></g><defs><pattern id="b" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#c" transform="scale(.00195)"/></pattern><filter id="a" x="8" y="12" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_7814_3206"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_7814_3206" result="shape"/></filter><image id="c" width="512" height="512" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACAKADAAQAAAABAAACAAAAAAAL+LWFAABAAElEQVR4Ae2dB9gcVfnF6T303hJCb6ErSEekCSgdLEG6XSwIiCWKBf2DCioKiBQRBURAQaV3pEsx9BQ60jsJJf7PgSxsNltm5p479bzPc77db2fue9/7m9mZO7ftNNPYTMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAE6kNg2voUxSUxgcYS4Pd4OLQmtBw012TNjddnoWcmv96N15ugpyGbCZiACZiACZhABQnwJv8J6Fzoeeh/KTQO+54M7QzNCdlMwARMwARMwARKTmAVxPcHaAKU5qbfa9+J8HMR9AVoKchmAiZgAiZgAiZQIgIrIZZzoElQr5u54vNb4f8waHnIZgImYAImYAImUBCBGZHvNyHVE3+aSsIdyPfb0IqQzQRMwARMwARMICcCSyOf26A0N+1Y+/4bcXwVWgyymYAJmIAJmIAJRCKwHvw+CcW6oWf1+xZiuhTaG+JA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Dvj7GOSbfxhHRWqOv/iVwlFJfVyIuO5lbFlbAFrlGoY3dMZVsGwmYAImYALpCTyNJLtDl6ZP6hSRCLB7dTzEsSF1s41QoKtZqKwtAC0g4/FmQ4ijZG0mYAImYALpCNyA3dnP65t/Om6x9+YS6EfEzqQA//9Anm/f/Jl3aAtAK34OqjkH4uAJmwmYgAmYwGACx2OXL0IeaDuYVRF7cCAeZ1atVETmEfKcAJ8cvP/uEsChLQCtGDkKn2MC+GMVHMVqMwETMAET6E6Av9HxSegAyDf/7ozK8CnHZXBQ5ptlCEYQwyj4ePfmT3/KqQUcOMGpE5zmsAWUx08iIhubCZiACVSGAOeEbwNxFpWt/AQeRoisAFS9dfsylOHT0BQP6KouAPidwhbHf3+AONjAZgImYAJNJ8CBfmzu/2PTQVSw/GwpPxPaqYKxM2Q+9a8H8RycwlRdAFM4xT+PQJtCbD55FrKZgAmYQBMJcPW2X0ArQr75V/MMYOv2J6ArKhj+E4h5S2iqm39eZZkfGZ0IESKbHywz8Dngc6Du5wCvd6dDwyFbPQhwaiBna1Tl3H0IsZZmAOMHEMxlFYJXlYPsOKvzhfSxqv+xegvXuPOhtSBb/QjMjCKdAZX9u3wnYlyijPg555X9KW4RKP9JVPaT3PH5HCrLOfASrmnHQaV54kIstngE2L3NGRxlOf/a4zgVcc0er+gaz6wInAa9ArUH7/fm4XPA50BVzoHRuH7xx3vmgmzNIrAminsjVJZz9THEslvVDgEXEfoUxO4BNp+VBabj8LHwOeBzoNs5cDuuU9+G/LQPCA03DqQ/AGJ/e7dzJY/P+Eu4P4E4RiGVxZoGmCqItp2XxPvtIc4g2ASaF7KZgAmYQJEEnkTmnLfPNU7Yv38fZDOBdgIz4Z+R0Gchtm7nYZxtdxLEn47ONMq/bBWAdmisWa0GsTLAATXLQ8tBbDGwmYAJmICawCQ45EV1DHQ/dD3EG79v+IBgS0xgFey5C8TFg94HzQip7C44ugw6b/Irz9nMVuYKQK9CLYYNrAwsDM0BzQOxUsD3s0I2EzABE+hF4DVs4Lgj/tgLB+7x/TMQb/pjIS/NCwg2GQEOxlsB4sPrUGhuiE3100OD7HnswOb9x6F7Id78ea7aTMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETKALgf8HyLYm8A+xjg4AAAAASUVORK5CYII="/></defs></svg>
        </Icon>
    );
};

export default MeasuringTapeCircled;