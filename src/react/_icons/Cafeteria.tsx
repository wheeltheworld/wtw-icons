import React from 'react';
import Icon from '../components/Icon';
import { IconComponent } from '../types';

const Cafeteria: IconComponent = (props) => (
    <Icon viewBox="0 0 24 24" {...props}>
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.19087 4.62357C7.95399 4.49497 7.64282 4.58638 7.49585 4.82774C7.34888 5.06911 7.42177 5.36903 7.65866 5.49763L7.85017 5.60161C7.89264 5.62467 7.89206 5.6854 7.84909 5.71318C7.08579 6.20653 7.16943 7.30809 7.99117 7.58452L8.13682 7.63351C8.3948 7.7203 8.68956 7.5804 8.7952 7.32105C8.90083 7.06169 8.77733 6.78109 8.51935 6.6943L8.37371 6.64531C8.35616 6.63941 8.34857 6.63191 8.3441 6.62589C8.33845 6.6183 8.3336 6.60684 8.33251 6.59241C8.33141 6.57798 8.33443 6.56545 8.33883 6.55648C8.34231 6.54937 8.34861 6.53998 8.36491 6.52944C9.05888 6.08089 9.06839 5.09998 8.38238 4.72754L8.19087 4.62357ZM6.00041 8.65276C5.65379 8.65276 5.3728 8.93374 5.3728 9.28036V10.445C4.99576 10.1905 4.54133 10.0419 4.05219 10.0419C2.74701 10.0419 1.68896 11.0999 1.68896 12.4051V12.7544C1.68896 14.2525 2.90341 15.467 4.40151 15.467H5.52711C5.82797 16.6262 6.54933 17.616 7.51865 18.2637L3.63052 18.2637C3.29915 18.2637 3.03052 18.5323 3.03052 18.8637C3.03051 19.1951 3.29914 19.4637 3.63051 19.4637L10.7268 19.4638L10.7372 19.4638H22.2973L22.3016 19.4638L22.6487 19.4638C22.9801 19.4638 23.2487 19.1952 23.2487 18.8638C23.2487 18.7467 23.2151 18.6374 23.1571 18.545C23.3012 18.0597 23.248 17.5246 22.985 17.0658L22.8339 16.8024C22.7825 16.7126 22.7098 16.6368 22.6224 16.5815L21.2963 15.7436C21.271 15.6153 21.2411 15.4876 21.2066 15.3607C21.1459 15.1382 20.9794 14.9599 20.7615 14.8842L19.1187 14.3141L19.0962 14.1509C19.063 13.9092 18.8964 13.707 18.6656 13.6282L18.6215 13.6131C18.0644 13.4229 17.4894 13.3043 16.9102 13.2573V10.2528C16.9102 9.3691 16.1939 8.65276 15.3102 8.65276H6.00041ZM15.7102 13.2622V10.2528C15.7102 10.0318 15.5311 9.85276 15.3102 9.85276H6.5728V14.2523C6.5728 16.0242 7.84534 17.4988 9.52634 17.8121C9.53786 17.5049 9.64209 17.1995 9.84155 16.9404C9.88578 16.8829 9.93976 16.8337 10.001 16.7949L11.3603 15.935C11.383 15.9207 11.4063 15.908 11.43 15.8971C11.4747 15.6907 11.5348 15.4866 11.6105 15.2863C11.6761 15.1126 11.8103 14.9737 11.9815 14.9021L13.416 14.3025C13.4651 14.282 13.5154 14.2685 13.5658 14.2615L13.5843 14.1407C13.6203 13.905 13.7835 13.7085 14.0086 13.6298C14.5621 13.4363 15.1337 13.3138 15.7102 13.2622ZM21.944 17.6627C22.0512 17.8497 22.0629 18.0714 21.9856 18.2638L21.202 18.2638C21.2965 17.9212 21.3573 17.5711 21.384 17.2185L21.8627 17.521L21.944 17.6627ZM11.3666 17.351C11.406 17.6611 11.4791 17.9672 11.5855 18.2638L10.9794 18.2638L10.816 18.0944C10.7231 17.9982 10.7007 17.8573 10.7526 17.7394L11.3666 17.351ZM19.0891 18.2637C19.221 17.3897 19.2693 16.5059 19.2337 15.6242L20.1093 15.9281C20.2717 16.7066 20.2145 17.5154 19.9437 18.2637H19.0891ZM13.4385 15.5937C13.4031 16.4871 13.4673 17.3827 13.6306 18.2637H12.8939C12.5113 17.5415 12.4292 16.6985 12.6629 15.918L13.4385 15.5937ZM14.721 14.6619C14.5638 15.8612 14.6084 17.0786 14.8533 18.2636H17.8742C18.0714 17.0724 18.098 15.8593 17.9533 14.6608C16.8969 14.3582 15.7767 14.3587 14.721 14.6619ZM4.40151 14.267C3.56616 14.267 2.88896 13.5898 2.88896 12.7544V12.4051C2.88896 11.7627 3.40976 11.2419 4.05219 11.2419C4.69462 11.2419 5.21541 11.7627 5.21541 12.4051V14.267H4.40151ZM10.2916 4.82774C10.4386 4.58638 10.7498 4.49497 10.9866 4.62357L11.1782 4.72754C11.8642 5.09998 11.8547 6.08089 11.1607 6.52944C11.1444 6.53998 11.1381 6.54937 11.1346 6.55648C11.1302 6.56545 11.1272 6.57798 11.1283 6.59241C11.1294 6.60684 11.1342 6.6183 11.1399 6.62589C11.1444 6.63191 11.1519 6.63941 11.1695 6.64531L11.3151 6.6943C11.5731 6.78109 11.6966 7.06169 11.591 7.32105C11.4853 7.5804 11.1906 7.7203 10.9326 7.63351L10.7869 7.58452C9.96521 7.30809 9.88157 6.20653 10.6449 5.71318C10.6878 5.6854 10.6884 5.62467 10.6459 5.60161L10.4544 5.49763C10.2176 5.36903 10.1447 5.06911 10.2916 4.82774ZM13.7824 4.62357C13.5455 4.49497 13.2344 4.58638 13.0874 4.82774C12.9404 5.06911 13.0133 5.36903 13.2502 5.49763L13.4417 5.60161C13.4842 5.62467 13.4836 5.6854 13.4406 5.71318C12.6773 6.20653 12.761 7.30809 13.5827 7.58452L13.7284 7.63351C13.9863 7.7203 14.2811 7.5804 14.3868 7.32105C14.4924 7.06169 14.3689 6.78109 14.1109 6.6943L13.9653 6.64531C13.9477 6.63941 13.9401 6.63191 13.9356 6.62589C13.93 6.6183 13.9252 6.60684 13.9241 6.59241C13.923 6.57798 13.926 6.56545 13.9304 6.55648C13.9339 6.54937 13.9402 6.53998 13.9565 6.52944C14.6504 6.08089 14.6599 5.09998 13.9739 4.72754L13.7824 4.62357Z"
            fill="currentColor"
        />
    </Icon>
);

export default Cafeteria;
