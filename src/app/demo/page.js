"use client";

import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "@/components/ui";

export default function DemoPage() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <main className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">
        StaySense AI - UI Component Library
      </h1>

      {/* Button */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Button Component
        </h2>

        <Button
          text="Open Modal"
          onClick={() => setShowModal(true)}
        />
      </section>

      {/* Input */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Input Component
        </h2>

        <Input
          label="Guest Name"
          placeholder="Enter guest name"
        />
      </section>

      {/* Loader */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Loader Component
        </h2>

        <Loader />
      </section>

      {/* Toast */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Toast Component
        </h2>

        <Button
          text="Show Toast"
          variant="secondary"
          onClick={() => setShowToast(true)}
        />

        {showToast && (
          <Toast message="Review analyzed successfully!" />
        )}
      </section>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        title="StaySense AI"
        onClose={() => setShowModal(false)}
      >
        This is a reusable modal component for the StaySense AI
        application.
      </Modal>
    </main>
  );
}