'use client';
import { Container, Title, Text, Button, Group } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Hero.module.css';

export function Hero() {
  return (
    <div className={classes.hero} id="hero">
      <Container size="md" className={classes.container}>
        <div className={classes.inner}>
          <img src="/profile.jpg" alt="Profile" className={classes.profileImage} />
          <Title className={classes.title}>
            Reliable & Experienced <br />
            <Text component="span" className={classes.highlight} inherit>
              System Developer
            </Text>
          </Title>

          <Text className={classes.description} mt={30}>
            Specialized in HR, Operation, and Management Systems. 
            Delivering stable and efficient solutions for large-scale enterprises.
          </Text>

          <Group mt={40}>
            <Button
              size="lg"
              className={classes.control}
              rightSection={<IconArrowRight size={20} />}
              component="a"
              href="#contact"
              variant="filled"
              color="blue"
            >
              Contact Me
            </Button>
            <Button
              component="a"
              href="#experience"
              size="lg"
              variant="outline"
              className={classes.control}
              color="blue"
            >
              View Experience
            </Button>
          </Group>
        </div>
      </Container>
    </div>
  );
}
