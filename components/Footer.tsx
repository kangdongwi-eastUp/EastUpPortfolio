'use client';
import { Container, Group, Text, Anchor } from '@mantine/core';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text c="dimmed" size="sm">
          © 2025 EastUp Dev. All rights reserved.
        </Text>
        <Group className={classes.links}>
            <Anchor c="dimmed" size="sm" href="mailto:eastup2025@gmail.com">
                eastup2025@gmail.com
            </Anchor>
        </Group>
      </Container>
    </div>
  );
}
