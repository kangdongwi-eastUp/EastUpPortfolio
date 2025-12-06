'use client';
import { Container, Title, Text, SimpleGrid, Card, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck, IconBriefcase, IconServer, IconSettings } from '@tabler/icons-react';
import classes from './Experience.module.css';

const hrSystems = [
  'ING Life HR System',
  'Prudential Life HR System',
  'Mirae Asset Securities HR System',
  'KEB (Korea Exchange Bank) HR System',
  'KDHC (Korea District Heating Corp) HR & Talent Development System',
  'Welcome Loan HR System',
  'Green Cross HR System Enhancement',
  'KHNP (Korea Hydro & Nuclear Power) Talent Development System',
  'Yuhan-Kimberly Payroll System Enhancement',
  'KTIS HR System Enhancement',
];

const otherSystems = [
  'GS T-money',
  'Nonghyup Distribution Office Management Info System',
  'Nonghyup Settlement System',
  'Nonghyup Affiliates Management Info System',
  'Good Neighbors Overseas Child Management System',
  'Nonghyup Livestock Economy Integrated System',
];

const operations = [
  'LG Electronics Subsidiaries HR System Operation',
  'Export-Import Bank of Korea HR System Operation',
  'LG Household & Health Care BAS System Development & Operation',
];

export function Experience() {
  return (
    <Container size="md" className={classes.wrapper} id="experience">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Professional Experience
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Extensive track record in building and maintaining critical enterprise systems.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        <Card shadow="md" radius="md" className={classes.card} padding="xl">
          <ThemeIcon
            variant="light"
            size={60}
            radius={60}
            color="blue"
            className={classes.icon}
          >
            <IconBriefcase style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ThemeIcon>

          <Text size="lg" fw={700} className={classes.cardTitle} mt="md">
            HR Systems Development
          </Text>

          <List
            mt="md"
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="blue.5">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            {hrSystems.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </Card>

        <Card shadow="md" radius="md" className={classes.card} padding="xl">
          <ThemeIcon
            variant="light"
            size={60}
            radius={60}
            color="teal"
            className={classes.icon}
          >
            <IconServer style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ThemeIcon>

          <Text size="lg" fw={700} className={classes.cardTitle} mt="md">
            Other Systems Development
          </Text>

          <List
            mt="md"
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="teal.5">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            {otherSystems.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </Card>

        <Card shadow="md" radius="md" className={classes.card} padding="xl">
          <ThemeIcon
            variant="light"
            size={60}
            radius={60}
            color="grape"
            className={classes.icon}
          >
            <IconSettings style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
          </ThemeIcon>

          <Text size="lg" fw={700} className={classes.cardTitle} mt="md">
            Operations & Maintenance
          </Text>

          <List
            mt="md"
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color="grape.5">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            {operations.map((item, index) => (
              <List.Item key={index}>{item}</List.Item>
            ))}
          </List>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
