'use client';
import { Container, Group, Text, Burger, Drawer, Stack, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const links = [
  { link: '#hero', label: 'Home' },
  { link: '#skills', label: 'Skills' },
  { link: '#experience', label: 'Experience' },
  { link: '#contact', label: 'Contact' },
];

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
        const element = document.querySelector(link.link);
        element?.scrollIntoView({ behavior: 'smooth' });
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Text fw={700} size="lg" c="blue.9">EastUp Portfolio</Text>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        
        <Drawer opened={opened} onClose={close} size="100%" padding="md" title="Navigation" hiddenFrom="xs" zIndex={1000000}>
            <Stack>
                {items}
            </Stack>
        </Drawer>
      </Container>
    </header>
  );
}
