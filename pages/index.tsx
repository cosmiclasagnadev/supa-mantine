import {Button, Center, Container, Flex, Group, Stack, Switch, Text, Title, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import {openConfirmModal} from "@mantine/modals";
import {showNotification} from "@mantine/notifications";
import {IconBrandTwitter, IconChevronRight, IconMoonStars, IconSun} from "@tabler/icons-react";
import {sampleFunction} from "../utils/sample-util";


export default function IndexPage() {

  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const theme = useMantineTheme();

  // Basic Mantine Modal Usage
  const openModal = () => openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: {confirm: 'Confirm', cancel: 'Cancel'},
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  // For accessing the supabase client, you can use the useSupabaseClient hook from @supabase/auth-helpers-react
  // For example:
  // import {useSupabaseClient} from "@supabase/auth-helpers-react";
  // const supabase = useSupabaseClient();


  // For accesing the supabase session, you can use the useSession hook from @supabase/auth-helpers-react
  // For example:
  // import {useSession} from "@supabase/auth-helpers-react";
  // const session = useSession();

  return (
    <Container size="md">
      <Center style={{height: "100vh"}}>
        <Flex direction="column" justify="center" align="center">
          <Title color="teal" mb="sm">Welcome to the Supa-Mantine Template 🎉</Title>
          <Group spacing="sm" position="center">
            <Button leftIcon={<IconChevronRight size={14} />} onClick={sampleFunction}>Trigger Sample Util Function</Button>
            <Button leftIcon={<IconChevronRight size={14} />} onClick={openModal}>Open Mantine Modal</Button>
            <Button
              leftIcon={<IconChevronRight size={14} />}
              onClick={() =>
                // Basic Mantine Notification Usage
                showNotification({
                  title: 'Default notification',
                  message: 'Hey there, your code is awesome! 🤥',
                })
              }
            >
              Show sample Mantine Notification
            </Button>
          </Group>
          <Switch
            checked={colorScheme === 'dark'}
            onChange={() => toggleColorScheme()}
            size="lg"
            onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
            offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
          />
        </Flex>
      </Center>
    </Container>
  );
}
