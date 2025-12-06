'use client';
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Container,
  Text,
  Paper,
  Notification,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import classes from './Contact.module.css';

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Name is too short' : null),
      email: (value) => (!/^\S+@\S+$/.test(value) ? 'Invalid email' : null),
      subject: (value) => (value.trim().length === 0 ? 'Subject is required' : null),
      message: (value) => (value.trim().length === 0 ? 'Message is required' : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    setNotification(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setNotification({ type: 'success', message: 'Message sent successfully!' });
        form.reset();
      } else {
        setNotification({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="md" className={classes.wrapper} id="contact">
        <Paper shadow="md" radius="lg" p="xl" withBorder>
      <Title order={2} size="h1" className={classes.title} ta="center">
        Get in touch
      </Title>
      <Text c="dimmed" fz="sm" ta="center" mt="sm" mb={30}>
        Interested in working together? Fill out the form below to send me an email directly.
      </Text>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" loading={loading}>
            Send Message
          </Button>
        </Group>
      </form>
      
      {notification && (
        <Notification
          icon={notification.type === 'success' ? <IconCheck size={20} /> : <IconX size={20} />}
          color={notification.type === 'success' ? 'teal' : 'red'}
          title={notification.type === 'success' ? 'Success' : 'Error'}
          mt="md"
          onClose={() => setNotification(null)}
        >
          {notification.message}
        </Notification>
      )}
      </Paper>
    </Container>
  );
}
