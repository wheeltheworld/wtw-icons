import React from 'react';
import { iconsArray } from '../../react/helpers';
import { Heading2, Heading3 } from '../components/atoms/Heading';
import Section from '../components/atoms/Section';
import Text from '../components/atoms/Text';
import Code from '../components/atoms/Code';
import { Li, Ul } from '../components/atoms/List';

interface AdvancedUsageProps {}

const AdvancedUsage: React.FC<AdvancedUsageProps> = ({}) => {
    return (
        <Section>
            <Heading2 color="#141414">Advanced Usage</Heading2>
            <Heading3 color="#141414">Less Bundle Size</Heading3>
            <Text>
                If you are searching to diminish your bundle size, using WTWIcon component is not a good idea, as it
                imports {Math.floor(iconsArray.length / 10) * 10}+ icons with it.
                <br />
                <br />
                Instead, we recommend importing just the icons you need from <Code>'wtw-icons/icons'</Code>, for example
                <br />
                <br />
                <Code>
                    import React from 'react'
                    <br />
                    import AccessiblePathsIcon from 'wtw-icons/icons'
                    <br />
                    <br />
                    const YourComponent = () =&gt; {'{'}
                    <br />
                    return {'<><AccessiblePathsIcon /></>'}
                    <br />
                    {'}'}
                </Code>
            </Text>
            <Heading3 color="#141414">Typing</Heading3>
            <Text>If you're using typescript I've got you good news, we have typescipt support!!</Text>
            <Ul>
                <Li>
                    If you need the icon tag type (to use it in the WTWIcon prop), you can import it directly from the
                    src{' '}
                    <Code>
                        import {'{'} IconTag {'}'} from 'wtw-icons'
                    </Code>
                </Li>
                <Li>
                    If for any reason you need the type of any icon(excluding WTWIcon) you can import it from
                    <Code>'wtw-icons/types'</Code> as <Code>IconComponent</Code>
                </Li>
                <Li>
                    If you need the type of the WTWIcon's props you can import it from
                    <Code>'wtw-icons/types'</Code> as <Code>WTWIconProps</Code>
                </Li>
                <Li>
                    If you need the type of the props of any icon component (excluding WTWIcon) you can import it from
                    <Code>'wtw-icons/types'</Code> as <Code>IconComponentProps</Code>
                </Li>
            </Ul>

            <Heading3 color="#141414">Helpers</Heading3>
            <Ul>
                <Li>
                    If you need an array with every icon tag possible, we've got you, you can import it from{' '}
                    <Code>'wtw-icons/helpers'</Code> as <Code>iconsArray</Code>
                </Li>
                <Li>
                    If for any reason you need an object with every icon possible, you can import it from
                    <Code>'wtw-icons/helpers'</Code> as <Code>iconsObject</Code>. In this object, every key is an icon
                    tag and it contains the component of that icon
                </Li>
            </Ul>
        </Section>
    );
};

export default AdvancedUsage;
