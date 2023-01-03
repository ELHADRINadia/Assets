return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Add Image</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.File
                    className="position-relative mt-2"
                    name="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    id="validationFormik107"
                    feedbackTooltip
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </>
      </div>
    </Container>
  );