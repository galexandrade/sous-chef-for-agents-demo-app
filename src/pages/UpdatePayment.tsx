import { useState } from 'react';
import {
    Avatar,
    Button,
    Card,
    CheckboxField,
    Chip,
    IconCheck,
    IconGift,
    Inline,
    Page,
    Stack,
    Text,
} from '@7shifts/sous-chef';

const SELL_POINTS = [
    'Task Management',
    'Permission Templates',
    'Tip Management',
    '7shifts Payroll*',
    'Everything in Pro',
];

const UpdatePayment = () => {
    const [agreed, setAgreed] = useState(false);

    return (
        <Page title="Update Payment">
            <Stack space={40}>
                <Stack space={12}>
                    <Text as="h1">Update your subscription</Text>
                    <Text as="h4">You're upgrading to the Premium plan</Text>
                </Stack>

                <Stack space={16}>
                    <Card>
                        <Inline justifyContent="center">
                            <Text as="caption" color="#767676">PLAN ESTIMATIONS DETAILS</Text>
                        </Inline>
                    </Card>

                    <Card>
                        <Stack space={16}>
                            <Inline justifyContent="space-between" alignItems="center">
                                <Text as="h4" emphasis="bold">Included in Premium</Text>
                                <Chip theme="upsell"><IconGift /> GREAT VALUE</Chip>
                            </Inline>
                            <Stack space={16}>
                                {SELL_POINTS.map((point) => (
                                    <Inline key={point} space={16} alignItems="center">
                                        <Avatar size="small" color="#323232">
                                            <IconCheck />
                                        </Avatar>
                                        <Text as="h5">{point}</Text>
                                    </Inline>
                                ))}
                            </Stack>
                        </Stack>
                    </Card>
                </Stack>

                <Stack space={8}>
                    <CheckboxField
                        name="agree"
                        checked={agreed}
                        onChange={setAgreed}
                        label="I agree to recurring charges from 7shifts"
                        caption="I authorize 7shifts to charge my payment method now and on a recurring basis per my selected plan. I can cancel anytime in my account settings."
                    />
                    <Text as="caption">
                        *Not included: Per employee fees and additional fees for rush payments and late tax filing.
                    </Text>
                </Stack>

                <Inline justifyContent="end" space={12}>
                    <Button>Back</Button>
                    <Button theme="primary">Confirm and pay</Button>
                </Inline>
            </Stack>
        </Page>
    );
};

export default UpdatePayment;
