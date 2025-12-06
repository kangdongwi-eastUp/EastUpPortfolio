'use client';
import { Container, Title, Text, SimpleGrid, Progress, Group, Paper } from '@mantine/core';
import classes from './Skills.module.css';

const skills = [
  { name: 'JAVA', value: 95 },
  { name: 'ORACLE', value: 95 },
  { name: 'Spring', value: 95 },
  { name: 'DB2', value: 95 },
  { name: 'HTML', value: 90 },
  { name: 'CSS', value: 80 },
  { name: 'jQuery', value: 50 },
  { name: 'MySQL', value: 50 },
  { name: 'MariaDB', value: 50 },
  { name: 'Next.js', value: 40 },
  { name: 'PHP', value: 40 },
  { name: 'Laravel', value: 40 },
  { name: 'GitHub', value: 40 },
];

export function Skills() {
  return (
    <Container size="md" className={classes.wrapper} id="skills">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Main Skills
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Technical proficiency and expertise levels.
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mt={50}>
        {skills.map((skill) => (
          <div key={skill.name}>
            <Group justify="space-between" mb={5}>
              <Text fw={700} className={classes.skillName}>
                {skill.name}
              </Text>
              <Text c="dimmed" size="sm" fw={700}>
                {skill.value}%
              </Text>
            </Group>
            <Progress 
                value={skill.value} 
                size="xl" 
                radius="xl" 
                classNames={{ section: classes.progressBar }} 
                color={skill.value >= 80 ? 'blue' : skill.value >= 50 ? 'teal' : 'cyan'}
            />
          </div>
        ))}
      </SimpleGrid>
    </Container>
  );
}
